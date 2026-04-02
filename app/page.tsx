export default function MeteoAgriasPublicPage() {
  const dashboardUrl =
    'https://smart-agrogenius.tago.run/dashboards/info/67fd6123eff26b000a5a4232?anonymousToken=00000000-6793-4c48-e8e5-73000ae5964b';

  return (
    <main
      style={{
        minHeight: '100vh',
        background:
          'linear-gradient(180deg, #061424 0%, #071b2f 45%, #0b1220 100%)',
        color: 'white',
        fontFamily: 'Arial, Helvetica, sans-serif',
        padding: '20px',
      }}
    >
      <div
        style={{
          maxWidth: '1200px',
          margin: '0 auto',
        }}
      >
        <header
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
            padding: '18px 20px',
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '24px',
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(10px)',
            marginBottom: '18px',
            flexWrap: 'wrap',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div
              style={{
                width: '56px',
                height: '56px',
                borderRadius: '18px',
                background: 'rgba(34,211,238,0.16)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
              }}
            >
              🌦️
            </div>
            <div>
              <div style={{ fontSize: '28px', fontWeight: 700 }}>Meteo Αγριάς</div>
              <div style={{ color: '#cbd5e1', marginTop: '4px' }}>
                Δημόσια τοπική μετεωρολογική ενημέρωση σε πραγματικό χρόνο
              </div>
            </div>
          </div>

          <a
            href={dashboardUrl}
            target="_blank"
            rel="noreferrer"
            style={{
              textDecoration: 'none',
              background: '#22d3ee',
              color: '#082f49',
              fontWeight: 700,
              padding: '12px 18px',
              borderRadius: '16px',
            }}
          >
            Άνοιγμα πηγής
          </a>
        </header>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: '1.3fr 0.9fr',
            gap: '18px',
            marginBottom: '18px',
          }}
        >
          <div
            style={{
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '28px',
              padding: '28px',
              background:
                'linear-gradient(135deg, rgba(34,211,238,0.12), rgba(255,255,255,0.03))',
            }}
          >
            <div
              style={{
                display: 'inline-block',
                padding: '8px 14px',
                borderRadius: '999px',
                background: 'rgba(34,211,238,0.12)',
                border: '1px solid rgba(34,211,238,0.18)',
                color: '#a5f3fc',
                fontSize: '13px',
                marginBottom: '18px',
              }}
            >
              Ζωντανή δημόσια προβολή για κινητό και web
            </div>

            <h1
              style={{
                fontSize: '48px',
                lineHeight: 1.05,
                margin: 0,
                marginBottom: '18px',
              }}
            >
              Πραγματικά δεδομένα καιρού για την Αγριά Βόλου
            </h1>

            <p
              style={{
                color: '#dbeafe',
                lineHeight: 1.8,
                fontSize: '17px',
                maxWidth: '760px',
              }}
            >
              Η σελίδα αυτή αποτελεί τη δημόσια ψηφιακή πρόσοψη του μετεωρολογικού
              σταθμού και προσφέρει άμεση πρόσβαση σε ζωντανά δεδομένα, διαγράμματα
              και επιχειρησιακή εικόνα πεδίου, με έμφαση στην καθαρή παρουσίαση και
              στην εύκολη χρήση από κινητές συσκευές.
            </p>
          </div>

          <div
            style={{
              border: '1px solid rgba(255,255,255,0.10)',
              borderRadius: '28px',
              padding: '24px',
              background: 'rgba(255,255,255,0.04)',
            }}
          >
            <div style={{ fontSize: '13px', letterSpacing: '0.18em', color: '#94a3b8' }}>
              ΤΟΠΙΚΗ ΕΝΗΜΕΡΩΣΗ
            </div>
            <h2 style={{ marginTop: '14px', marginBottom: '18px', fontSize: '30px' }}>
              Τι προσφέρει τώρα η σελίδα
            </h2>

            <div style={{ display: 'grid', gap: '12px' }}>
              <div
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '18px',
                  padding: '16px',
                  background: 'rgba(2,6,23,0.35)',
                }}
              >
                <strong>Ζωντανή εικόνα πεδίου</strong>
                <div style={{ color: '#cbd5e1', marginTop: '8px', lineHeight: 1.6 }}>
                  Άμεση πρόσβαση στο ενεργό dashboard του σταθμού χωρίς ανάγκη ξεχωριστής εφαρμογής.
                </div>
              </div>

              <div
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '18px',
                  padding: '16px',
                  background: 'rgba(2,6,23,0.35)',
                }}
              >
                <strong>Έτοιμη για δημόσια χρήση</strong>
                <div style={{ color: '#cbd5e1', marginTop: '8px', lineHeight: 1.6 }}>
                  Μπορεί να ανοίγει από κινητό, να κοινοποιείται ως σύνδεσμος και να λειτουργεί ως δημόσιο σημείο αναφοράς.
                </div>
              </div>

              <div
                style={{
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '18px',
                  padding: '16px',
                  background: 'rgba(2,6,23,0.35)',
                }}
              >
                <strong>Έτοιμη για αναβάθμιση</strong>
                <div style={{ color: '#cbd5e1', marginTop: '8px', lineHeight: 1.6 }}>
                  Μόλις δοθεί API ή token raw δεδομένων, η ίδια βάση θα μετατραπεί σε πλήρη εφαρμογή με κάρτες, alerts και ιστορικά στοιχεία.
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: '14px',
            marginBottom: '18px',
          }}
        >
          <div
            style={{
              borderRadius: '22px',
              padding: '20px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>Κατάσταση</div>
            <div style={{ fontSize: '28px', fontWeight: 700, marginTop: '10px' }}>Live</div>
            <div style={{ color: '#cbd5e1', marginTop: '8px', lineHeight: 1.6 }}>
              Δημόσια σύνδεση με το dashboard του μετεωρολογικού σταθμού.
            </div>
          </div>

          <div
            style={{
              borderRadius: '22px',
              padding: '20px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>Ρυθμός ενημέρωσης</div>
            <div style={{ fontSize: '28px', fontWeight: 700, marginTop: '10px' }}>Ανά 5′</div>
            <div style={{ color: '#cbd5e1', marginTop: '8px', lineHeight: 1.6 }}>
              Σύμφωνα με τον διαθέσιμο κύκλο ανανέωσης της πηγής δεδομένων.
            </div>
          </div>

          <div
            style={{
              borderRadius: '22px',
              padding: '20px',
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <div style={{ color: '#94a3b8', fontSize: '12px', textTransform: 'uppercase' }}>Προβολή</div>
            <div style={{ fontSize: '28px', fontWeight: 700, marginTop: '10px' }}>Mobile-first</div>
            <div style={{ color: '#cbd5e1', marginTop: '8px', lineHeight: 1.6 }}>
              Βελτιστοποιημένη δημόσια εμπειρία για κινητό, tablet και υπολογιστή.
            </div>
          </div>
        </section>

        <section
          style={{
            border: '1px solid rgba(255,255,255,0.10)',
            borderRadius: '28px',
            padding: '16px',
            background: 'rgba(255,255,255,0.04)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '14px',
              marginBottom: '14px',
              flexWrap: 'wrap',
            }}
          >
            <div>
              <h2 style={{ margin: 0, fontSize: '30px' }}>Ζωντανό dashboard σταθμού</h2>
              <div style={{ color: '#cbd5e1', marginTop: '6px' }}>
                Προσωρινή αξιόπιστη ενσωμάτωση της δημόσιας πηγής έως την επίσημη διασύνδεση raw δεδομένων.
              </div>
            </div>

            <a
              href={dashboardUrl}
              target="_blank"
              rel="noreferrer"
              style={{
                textDecoration: 'none',
                padding: '12px 18px',
                borderRadius: '16px',
                border: '1px solid rgba(255,255,255,0.12)',
                color: 'white',
              }}
            >
              Άνοιγμα πηγής
            </a>
          </div>

          <div
            style={{
              overflow: 'hidden',
              borderRadius: '22px',
              border: '1px solid rgba(255,255,255,0.08)',
              background: 'white',
            }}
          >
            <iframe
              src={dashboardUrl}
              title="Meteo Αγριάς dashboard"
              style={{ width: '100%', height: '78vh', border: 'none' }}
            />
          </div>
        </section>
      </div>
    </main>
  );
}
