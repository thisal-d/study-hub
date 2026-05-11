import matplotlib
matplotlib.use('Agg')
import matplotlib.pyplot as plt
import matplotlib.patches as mpatches
import os

BASE = r"H:\Personal Projects\study-hub\operating-systems\final-papers\assets"

# ── helpers ──────────────────────────────────────────────────────────────────

def savefig(path):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    plt.savefig(path, dpi=130, bbox_inches='tight', facecolor='white')
    plt.close()
    print("Saved:", path)

# ── Q1 diagrams: pseudocode scenario ─────────────────────────────────────────

def q1_diagram(paper, title, lines):
    fig, ax = plt.subplots(figsize=(11, 5))
    ax.axis('off')
    # outer box
    rect = mpatches.FancyBboxPatch((0.01,0.01), 0.98, 0.98,
        boxstyle="round,pad=0.02", linewidth=2,
        edgecolor='#2C3E50', facecolor='#F8F9FA')
    ax.add_patch(rect)
    # title bar
    tbar = mpatches.FancyBboxPatch((0.01,0.82), 0.98, 0.16,
        boxstyle="round,pad=0.01", linewidth=1,
        edgecolor='#2C3E50', facecolor='#2C3E50')
    ax.add_patch(tbar)
    ax.text(0.50, 0.90, title, ha='center', va='center',
            fontsize=11, color='white', fontweight='bold',
            fontfamily='monospace', transform=ax.transAxes)
    # code lines
    y = 0.76
    for ln in lines:
        ax.text(0.04, y, ln, ha='left', va='top',
                fontsize=9.5, fontfamily='monospace',
                color='#1A252F', transform=ax.transAxes)
        y -= 0.068
    ax.set_xlim(0,1); ax.set_ylim(0,1)
    savefig(os.path.join(BASE, f"paper-{paper}", "q1.png"))

# ── Q2 diagrams: paging address layout ───────────────────────────────────────

def q2_diagram(paper, phys_mb, virt_mb, page_kb):
    import math
    phys = phys_mb * 1024 * 1024
    virt = virt_mb * 1024 * 1024
    page = page_kb * 1024
    frames = phys // page
    pages  = virt  // page
    off_bits   = int(math.log2(page))
    frame_bits = int(math.log2(frames))
    page_bits  = int(math.log2(pages))

    fig, axes = plt.subplots(1, 3, figsize=(13, 6))
    fig.suptitle(
        f"Paging System  |  Physical: {phys_mb} MB   Virtual: {virt_mb} MB   Page: {page_kb} KB",
        fontsize=12, fontweight='bold', y=1.01)

    colors = ['#AED6F1','#A9DFBF','#F9E79F','#F1948A','#D7BDE2','#FAD7A0']

    # ── Left: Logical memory ──
    ax = axes[0]
    ax.set_title("Logical Memory", fontweight='bold', fontsize=11)
    show = min(7, pages)
    h = 1.0 / show
    for i in range(show):
        ax.add_patch(mpatches.FancyBboxPatch(
            (0.1, i*h+0.005), 0.8, h-0.01,
            boxstyle="round,pad=0.01",
            facecolor=colors[i % len(colors)], edgecolor='#555'))
        ax.text(0.5, (i+0.5)*h, f"Page {i}", ha='center', va='center', fontsize=9)
    if pages > show:
        ax.text(0.5, 0.02, f"… {pages:,} pages total", ha='center', fontsize=8, style='italic')
    ax.set_xlim(0,1); ax.set_ylim(0,1); ax.axis('off')

    # ── Middle: Address breakdown ──
    ax = axes[1]
    ax.set_title("Virtual Address Layout", fontweight='bold', fontsize=11)
    ax.axis('off')
    ax.set_xlim(0,1); ax.set_ylim(0,1)
    # address bar
    pn_w = page_bits / (page_bits + off_bits)
    ax.add_patch(mpatches.FancyBboxPatch((0.05,0.65), pn_w*0.9, 0.15,
        boxstyle="round,pad=0.01", facecolor='#AED6F1', edgecolor='#2980B9', lw=2))
    ax.text(0.05 + pn_w*0.45, 0.725, f"Page Number\n({page_bits} bits)",
            ha='center', va='center', fontsize=9, fontweight='bold')
    ax.add_patch(mpatches.FancyBboxPatch((0.05+pn_w*0.9+0.01,0.65),
        (1-pn_w)*0.9-0.02, 0.15,
        boxstyle="round,pad=0.01", facecolor='#A9DFBF', edgecolor='#27AE60', lw=2))
    ax.text(0.05+pn_w*0.9+0.01+(1-pn_w)*0.45, 0.725,
            f"Offset\n({off_bits} bits)",
            ha='center', va='center', fontsize=9, fontweight='bold')
    # stats
    stats = [
        f"Total virtual address bits : {page_bits+off_bits}",
        f"Page size                  : {page_kb} KB = 2^{off_bits} bytes",
        f"Number of pages            : {pages:,} = 2^{page_bits}",
        f"Number of frames           : {frames:,} = 2^{frame_bits}",
        f"Frame number bits          : {frame_bits}",
        f"Page table entries         : {pages:,}",
    ]
    y = 0.55
    for s in stats:
        ax.text(0.05, y, s, fontsize=8.5, fontfamily='monospace', va='top')
        y -= 0.08

    # ── Right: Physical memory ──
    ax = axes[2]
    ax.set_title("Physical Memory (Frames)", fontweight='bold', fontsize=11)
    show_f = min(7, frames)
    h = 1.0 / show_f
    for i in range(show_f):
        ax.add_patch(mpatches.FancyBboxPatch(
            (0.1, i*h+0.005), 0.8, h-0.01,
            boxstyle="round,pad=0.01",
            facecolor='#E8F8F5', edgecolor='#1ABC9C'))
        ax.text(0.5, (i+0.5)*h, f"Frame {i}", ha='center', va='center', fontsize=9)
    if frames > show_f:
        ax.text(0.5, 0.02, f"… {frames:,} frames total", ha='center', fontsize=8, style='italic')
    ax.set_xlim(0,1); ax.set_ylim(0,1); ax.axis('off')

    plt.tight_layout()
    savefig(os.path.join(BASE, f"paper-{paper}", "q2.png"))

# ── Q3 diagrams: Resource Allocation Graph ────────────────────────────────────

def q3_rag(paper, procs, res_def, req_edges, asgn_edges):
    """
    procs     : {name: (x,y)}
    res_def   : {name: ((x,y), instances)}
    req_edges : list of (proc_name, res_name)
    asgn_edges: list of (res_name, proc_name)
    """
    fig, ax = plt.subplots(figsize=(10, 8))
    ax.set_xlim(0, 10); ax.set_ylim(0, 10)
    ax.axis('off')
    ax.set_title(f"Resource Allocation Graph — Paper {paper}",
                 fontsize=14, fontweight='bold', pad=12)

    ppos, rpos = {}, {}

    for name, (x, y) in procs.items():
        c = plt.Circle((x, y), 0.55, color='#2980B9', zorder=3)
        ax.add_patch(c)
        ax.text(x, y, name, ha='center', va='center',
                fontsize=11, fontweight='bold', color='white', zorder=4)
        ppos[name] = (x, y)

    for name, ((x, y), inst) in res_def.items():
        r = mpatches.FancyBboxPatch((x-0.8, y-0.45), 1.6, 0.9,
            boxstyle="round,pad=0.05",
            linewidth=2, edgecolor='#E74C3C', facecolor='#FDEDEC', zorder=3)
        ax.add_patch(r)
        ax.text(x, y+0.65, name, ha='center', va='center',
                fontsize=10, fontweight='bold', zorder=4)
        xs = [x + (j - (inst-1)/2)*0.28 for j in range(inst)]
        for dx in xs:
            ax.add_patch(plt.Circle((dx, y), 0.13, color='#E74C3C', zorder=4))
        rpos[name] = (x, y)

    def arrow(src, dst, col):
        import numpy as np
        s, d = np.array(src), np.array(dst)
        diff = d - s; n = np.linalg.norm(diff)
        s2 = s + 0.6*diff/n
        d2 = d - 0.6*diff/n
        ax.annotate('', xy=d2, xytext=s2,
                    arrowprops=dict(arrowstyle='->', color=col, lw=2.0), zorder=5)

    for p, r in req_edges:
        arrow(ppos[p], rpos[r], '#2980B9')
    for r, p in asgn_edges:
        arrow(rpos[r], ppos[p], '#27AE60')

    # legend
    ax.annotate('', xy=(1.2,0.4), xytext=(0.2,0.4),
                arrowprops=dict(arrowstyle='->', color='#2980B9', lw=2))
    ax.text(1.35, 0.4, "Request edge", fontsize=9, va='center', color='#2980B9')
    ax.annotate('', xy=(5.2,0.4), xytext=(4.2,0.4),
                arrowprops=dict(arrowstyle='->', color='#27AE60', lw=2))
    ax.text(5.35, 0.4, "Assignment edge", fontsize=9, va='center', color='#27AE60')

    savefig(os.path.join(BASE, f"paper-{paper}", "q3.png"))

# ═══════════════════════════════════════════════════════════════════════════════
# PAPER 2
# ═══════════════════════════════════════════════════════════════════════════════
q1_diagram(2, "Cinema Booking System — Shared Resource Scenario",
[
 "shared int available_seats = 200;    // shared across all counters",
 "",
 "Booking_Counter_Process {",
 "    // Entry Section",
 "    local = available_seats;         // read shared variable",
 "    if (local > 0) {",
 "        local = local - 1;           // modify local copy",
 "        available_seats = local;     // write back to shared",
 "        confirm_booking();           // complete booking",
 "    }",
 "    // Exit Section",
 "}",
 "",
 "// 5 counters execute this process concurrently",
])

q2_diagram(2, 512, 4096, 8)

q3_rag(2,
    procs  = {"P1":(2,7), "P2":(8,7), "P3":(5,3)},
    res_def= {"R1":((5,8),1), "R2":((2,4),2), "R3":((8,4),1)},
    req_edges  = [("P1","R1"), ("P2","R3"), ("P3","R2")],
    asgn_edges = [("R1","P2"), ("R2","P1"), ("R2","P3"), ("R3","P3")]
)

# ═══════════════════════════════════════════════════════════════════════════════
# PAPER 3
# ═══════════════════════════════════════════════════════════════════════════════
q1_diagram(3, "Hospital Blood Bank — Shared Inventory Scenario",
[
 "shared int blood_units = 500;        // shared across all wards",
 "",
 "Ward_Process {",
 "    // Entry Section",
 "    local = blood_units;             // read shared inventory",
 "    if (local >= required_units) {",
 "        local = local - required_units;",
 "        blood_units = local;         // write back to shared",
 "        issue_blood();               // update BloodInventoryLog",
 "    }",
 "    // Exit Section",
 "}",
 "",
 "// 8 wards execute this process concurrently",
])

q2_diagram(3, 128, 1024, 4)

q3_rag(3,
    procs  = {"P1":(2,7), "P2":(8,7), "P3":(5,2)},
    res_def= {"R1":((5,8),2), "R2":((2,3),1), "R3":((8,3),1)},
    req_edges  = [("P1","R2"), ("P2","R1"), ("P3","R3")],
    asgn_edges = [("R1","P1"), ("R1","P2"), ("R2","P3"), ("R3","P2")]
)

# ═══════════════════════════════════════════════════════════════════════════════
# PAPER 4
# ═══════════════════════════════════════════════════════════════════════════════
q1_diagram(4, "University Grade Portal — Shared Records Scenario",
[
 "shared GradeRecordLog gradeDB;       // shared across all faculties",
 "",
 "Faculty_Process {",
 "    // Entry Section",
 "    record = gradeDB.read(studentID);// read shared grade record",
 "    record.marks = new_marks;        // modify local copy",
 "    gradeDB.write(studentID, record);// write back to shared DB",
 "    // Critical Section",
 "    update_transcript();             // update GradeRecordLog",
 "    // Exit Section",
 "}",
 "",
 "// 15 faculties execute this process concurrently",
])

q2_diagram(4, 64, 512, 2)

q3_rag(4,
    procs  = {"P1":(2,7), "P2":(8,7), "P3":(2,3), "P4":(8,3)},
    res_def= {"R1":((5,7),1), "R2":((5,3),1)},
    req_edges  = [("P1","R1"), ("P3","R2")],
    asgn_edges = [("R1","P2"), ("R2","P4"), ("R1","P3"), ("R2","P1")]
)

# ═══════════════════════════════════════════════════════════════════════════════
# PAPER 5
# ═══════════════════════════════════════════════════════════════════════════════
q1_diagram(5, "Bank ATM Network — Shared Transaction Scenario",
[
 "shared int account_balance;          // shared across 12 branches",
 "",
 "ATM_Process {",
 "    // Entry Section",
 "    local_bal = account_balance;     // read shared balance",
 "    if (local_bal >= withdraw_amt) {",
 "        local_bal = local_bal - withdraw_amt;",
 "        account_balance = local_bal; // write back to shared",
 "        dispense_cash();             // update TransactionLog",
 "    }",
 "    // Exit Section",
 "}",
 "",
 "// 12 ATMs execute this process concurrently",
])

q2_diagram(5, 256, 2048, 32)

q3_rag(5,
    procs  = {"P1":(2,7), "P2":(8,7), "P3":(5,3)},
    res_def= {"R1":((5,8),1), "R2":((2,4),1), "R3":((8,4),2)},
    req_edges  = [("P1","R1"), ("P2","R2"), ("P3","R1")],
    asgn_edges = [("R1","P2"), ("R2","P1"), ("R3","P3"), ("R3","P1")]
)

# ═══════════════════════════════════════════════════════════════════════════════
# PAPER 6
# ═══════════════════════════════════════════════════════════════════════════════
q1_diagram(6, "Railway Ticketing System — Shared Booking Scenario",
[
 "shared int seat_count = 300;         // shared across all stations",
 "",
 "Station_Process {",
 "    // Entry Section",
 "    local = seat_count;              // read shared seat counter",
 "    if (local > 0) {",
 "        local = local - 1;           // decrement local copy",
 "        seat_count = local;          // write back to shared",
 "        issue_ticket();              // update TicketReservationLog",
 "    }",
 "    // Exit Section",
 "}",
 "",
 "// 6 stations execute this process concurrently",
])

q2_diagram(6, 512, 8192, 16)

q3_rag(6,
    procs  = {"P1":(2,7), "P2":(8,7), "P3":(5,3)},
    res_def= {"R1":((5,8),1), "R2":((2,4),1), "R3":((8,4),1)},
    req_edges  = [("P1","R2"), ("P2","R3"), ("P3","R1")],
    asgn_edges = [("R1","P1"), ("R2","P2"), ("R3","P3")]
)

print("All diagrams generated successfully.")
