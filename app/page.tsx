export default function MeteoAgrias() {
  const dashboardUrl =
    "https://smart-agrogenius.tago.run/dashboards/info/67fd6123eff26b000a5a4232?anonymousToken=00000000-6793-4c48-e8e5-73000ae5964b";

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #061424 0%, #071b2f 45%, #0b1220 100%)",
        color: "white",
        fontFamily: "Arial, Helvetica, sans-serif",
        padding: "20px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        
        {/* HEADER */}
        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "20px",
            borderRadius: "20px",
            background: "rgba(255,255,255,0.05)",
            marginBottom: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            
            {/* LOGO */}
            <img
              src="/logo.png"
              alt="Meteo Αγριάς"
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "12px",
              }}
            />

            <div>
              <h1 style={{ margin: 0 }}>Meteo Αγριάς</h1>
              <div style={{ color: "#cbd5e1" }}>
                Ζωντανή μετεωρολογική ενημέρωση
              </div>
            </div>
          </div>

          <a
            href={dashboardUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              background: "#22d3ee",
              color: "#082f49",
              padding: "10px 15px",
              borderRadius: "12px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Άνοιγμα πηγής
          </a>
        </header>

        {/* INFO BOX */}
        <section
          style={{
            background: "rgba(255,255,255,0.05)",
            padding: "20px",
            borderRadius: "20px",
            marginBottom: "20px",
          }}
        >
          <h2>Τοπικός Μετεωρολογικός Σταθμός Αγριάς</h2>
          <p style={{ color: "#cbd5e1", lineHeight: 1.6 }}>
            Ζωντανή μετάδοση δεδομένων από τον σταθμό. Η σελίδα λειτουργεί ως
            δημόσιο σημείο ενημέρωσης για καιρικές συνθήκες σε πραγματικό χρόνο.
          </p>
        </section>

        {/* DASHBOARD */}
        <section
          style={{
            background: "white",
            borderRadius: "20px",
            overflow: "hidden",
          }}
        >
          <iframe
            src={dashboardUrl}
            style={{
              width: "100%",
              height: "75vh",
              border: "none",
            }}
          />
        </section>
      </div>
    </main>
  );
}
