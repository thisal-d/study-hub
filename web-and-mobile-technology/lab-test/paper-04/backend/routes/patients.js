const express = require('express');
const router = express.Router();
const Patient = require('../models/Patient');

// ── POST /api/patients — Admit new patient ────────────────────────────────
router.post('/', async (req, res) => {
  try {
    const patient = new Patient(req.body);
    const saved = await patient.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── GET /api/patients — Get all patients (with optional ?status= filter) ──
router.get('/', async (req, res) => {
  try {
    const filter = {};
    // req.query contains URL parameters: /api/patients?status=Admitted
    if (req.query.status) filter.status = req.query.status;
    if (req.query.priority) filter.priority = req.query.priority;

    const patients = await Patient.find(filter).sort({ admittedDate: -1 });
    res.json(patients);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// ── GET /api/patients/:id — Get one patient ───────────────────────────────
router.get('/:id', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    res.json(patient);
  } catch (err) {
    res.status(400).json({ error: 'Invalid patient ID' });
  }
});

// ── PUT /api/patients/:id — Update patient record ─────────────────────────
router.put('/:id', async (req, res) => {
  try {
    const updated = await Patient.findByIdAndUpdate(
      req.params.id, req.body,
      { new: true, runValidators: true }
    );
    if (!updated) return res.status(404).json({ error: 'Patient not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── DELETE /api/patients/:id — Delete patient record ─────────────────────
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Patient.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Patient not found' });
    res.json({ message: 'Patient record deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── PATCH /api/patients/:id/discharge — Discharge a patient ──────────────
router.patch('/:id/discharge', async (req, res) => {
  try {
    const patient = await Patient.findById(req.params.id);
    if (!patient) return res.status(404).json({ error: 'Patient not found' });
    if (patient.status === 'Discharged') {
      return res.status(400).json({ error: 'Patient is already discharged' });
    }
    patient.status = 'Discharged';
    patient.dischargedDate = new Date(); // record exact discharge time
    await patient.save();
    res.json({ message: 'Patient discharged successfully', patient });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// ── PATCH /api/patients/:id/status — Update status only ──────────────────
router.patch('/:id/status', async (req, res) => {
  try {
    const { status } = req.body;
    const VALID = ['Admitted', 'Under Treatment', 'Recovering', 'Discharged'];
    if (!VALID.includes(status)) {
      return res.status(400).json({ error: `Status must be one of: ${VALID.join(', ')}` });
    }
    const updated = await Patient.findByIdAndUpdate(
      req.params.id, { status }, { new: true }
    );
    if (!updated) return res.status(404).json({ error: 'Patient not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

module.exports = router;
