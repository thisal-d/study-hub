const mongoose = require('mongoose');

const patientSchema = new mongoose.Schema(
  {
    // Original fields (given in starter)
    name: {
      type: String,
      required: [true, 'Patient name is required'],
      trim: true,
      minlength: [2, 'Name must be at least 2 characters'],
    },
    age: {
      type: Number,
      required: [true, 'Age is required'],
      min: [0, 'Age cannot be negative'],
      max: [150, 'Age seems invalid'],
    },

    // ✅ NEW FIELDS — added by you
    bloodGroup: {
      type: String,
      required: [true, 'Blood group is required'],
      enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    diagnosis: {
      type: String,
      required: [true, 'Diagnosis is required'],
      trim: true,
      maxlength: [500, 'Diagnosis cannot exceed 500 characters'],
    },
    priority: {
      type: String,
      enum: ['Low', 'Medium', 'High', 'Critical'],
      default: 'Medium',
    },
    status: {
      type: String,
      enum: ['Admitted', 'Under Treatment', 'Recovering', 'Discharged'],
      default: 'Admitted',
    },
    admittedDate: {
      type: Date,
      default: Date.now, // NOTE: no () — Mongoose calls this function on each new doc
    },
    dischargedDate: {
      type: Date,
      default: null, // null until the patient is discharged
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model('Patient', patientSchema);
