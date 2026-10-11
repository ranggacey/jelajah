import { useState, useEffect } from 'react'

const DESTINATIONS = [
  { name: 'Bali', desc: 'Pantai, pura, dan sunset yang tak terlupakan.', img: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?q=80&w=800&auto=format&fit=crop', days: '4 Hari 3 Malam', rating: '4.9', price: 'Rp 2,9jt' },
  { name: 'Raja Ampat', desc: 'Surga bawah laut dengan gugusan pulau karst.', img: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e?q=80&w=800&auto=format&fit=crop', days: '5 Hari 4 Malam', rating: '5.0', price: 'Rp 6,5jt' },
  { name: 'Bromo', desc: 'Sunrise legendaris di atas lautan pasir.', img: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?q=80&w=800&auto=format&fit=crop', days: '3 Hari 2 Malam', rating: '4.8', price: 'Rp 1,8jt' },
  { name: 'Yogyakarta', desc: 'Budaya, kuliner, dan keramahan khas Jawa.', img: 'https://images.unsplash.com/photo-1488646953014-85cb44e25828?q=80&w=800&auto=format&fit=crop', days: '3 Hari 2 Malam', rating: '4.9', price: 'Rp 1,5jt' },
]

const FEATURES = [
  { icon: 'shield', title: 'Terpercaya & Berizin', desc: 'Biro perjalanan resmi berizin dengan 10 tahun pengalaman.' },
  { icon: 'users', title: 'Guide Lokal Ahli', desc: 'Didampingi guide lokal yang hafal setiap sudut destinasi.' },
  { icon: 'wallet', title: 'Harga Transparan', desc: 'Tanpa biaya tersembunyi. Semua sudah termasuk di paket.' },
  { icon: 'chat', title: 'Support 24/7', desc: 'Tim kami siaga membantu kapan pun selama perjalananmu.' },
]

const TESTIS = [
  { name: 'Rizky Pratama', trip: 'Open Trip Bromo', text: 'Pengalaman sunrise di Bromo luar biasa! Guide-nya asik, itinerary rapi, nggak ada drama sama sekali.' },
  { name: 'Dewi Anggraini', trip: 'Honeymoon Bali', text: 'Semuanya diurus dari jemputan sampai dinner romantis. Kami tinggal menikmati. Worth every rupiah!' },
  { name: 'Andi Wijaya', trip: 'Raja Ampat Expedition', text: 'Trip paling berkesan seumur hidup. Spot-spotnya hidden gem banget, fotonya bagus semua.' },
]

function Icon({ name }) {
  const paths = {
    pin: <path d="M12 21s7-5.5 7-11a7 7 0 1 0-14 0c0 5.5 7 11 7 11zm0-8.5a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5z" />,
    star: <path d="M12 2l2.9 6.3 6.9.8-5.1 4.7 1.4 6.8L12 17.2 5.9 20.6l1.4-6.8L2.2 9.1l6.9-.8L12 2z" />,
    arrow: <path d="M5 12h14m-6-6l6 6-6 6" />,
    shield: <path d="M12 2l8 3v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V5l8-3z" />,
    users: <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2m20 0v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75M13 7a4 4 0 1 1-8 0 4 4 0 0 1 8 0z" />,
    wallet: <path d="M20 7H5a2 2 0 0 1 0-4h14v4m0 0a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5m16 7h.01" />,
    chat: <path d="M21 12a8 8 0 0 1-8 8H4l2-3a8 8 0 1 1 15-5z" />,
    plane: <path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z" />,
    clock: <path d="M12 21a9 9 0 1 0 0-18 9 9 0 0 0 0 18zm0-13v5l3 2" />,
  }
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {paths[name]}
    </svg>
  )
}

export default function App() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    const els = document.querySelectorAll('.reveal')
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target) } }),
      { threshold: 0.1 }
    )
    els.forEach((el) => io.observe(el))
    return () => { window.removeEventListener('scroll', onScroll); io.disconnect() }
  }, [])

  return (
    <div className="site">
      <nav className={`nav ${scrolled ? 'solid' : ''}`}>
        <div className="container nav-inner">
          <a className="logo" href="#"><span className="logo-mark"><Icon name="plane" /></span>Jelajah</a>
          <div className={`nav-links ${open ? 'show' : ''}`}>
            <a href="#destinasi" onClick={() => setOpen(false)}>Destinasi</a>
            <a href="#kenapa" onClick={() => setOpen(false)}>Kenapa Kami</a>
            <a href="#testimoni" onClick={() => setOpen(false)}>Testimoni</a>
          </div>
          <div className="nav-cta">
            <a href="#cta" className="btn btn-primary">Mulai Petualangan</a>
            <button className="burger" onClick={() => setOpen(!open)} aria-label="Menu"><span /><span /><span /></button>
          </div>
        </div>
      </nav>

      <header className="hero">
        <div className="container hero-content">
          <p className="eyebrow reveal"><Icon name="pin" /> 120+ Destinasi di Seluruh Indonesia</p>
          <h1 className="reveal">Jelajahi Indonesia,<br />Ciptakan <em>Ceritamu.</em></h1>
          <p className="lead reveal">Dari sunrise Bromo sampai bawah laut Raja Ampat — kami rancang perjalanan yang rapi, aman, dan tak terlupakan.</p>
          <form className="searchbar reveal" onSubmit={(e) => e.preventDefault()}>
            <div className="field"><label>Destinasi</label><input placeholder="Mau ke mana?" /></div>
            <div className="field"><label>Tanggal</label><input type="date" /></div>
            <div className="field"><label>Peserta</label><input type="number" min="1" defaultValue="2" /></div>
            <button className="btn btn-primary" type="submit">Cari Trip</button>
          </form>
          <div className="hero-stats reveal">
            <div><strong>50rb+</strong><span>Traveler Puas</span></div>
            <div><strong>10 thn</strong><span>Pengalaman</span></div>
            <div><strong>4.9/5</strong><span>Rating Trip</span></div>
          </div>
        </div>
      </header>

      <section id="destinasi" className="section">
        <div className="container">
          <div className="section-head reveal">
            <div><p className="eyebrow">Destinasi Populer</p><h2>Paling Sering <em>Dipesan</em></h2></div>
            <a href="#" className="link-more">Lihat Semua <Icon name="arrow" /></a>
          </div>
          <div className="dest-grid">
            {DESTINATIONS.map((d, i) => (
              <article key={i} className="dest-card reveal">
                <div className="dest-img">
                  <img src={d.img} alt={d.name} loading="lazy" />
                  <span className="dest-rating"><Icon name="star" />{d.rating}</span>
                </div>
                <div className="dest-body">
                  <div className="dest-loc"><Icon name="pin" />Indonesia</div>
                  <h3>{d.name}</h3>
                  <p>{d.desc}</p>
                  <div className="dest-meta"><span><Icon name="clock" />{d.days}</span></div>
                  <div className="dest-foot"><div><span className="from">Mulai dari</span><strong>{d.price}</strong></div><button className="btn btn-small">Pesan</button></div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="kenapa" className="section alt">
        <div className="container">
          <p className="eyebrow reveal">Kenapa Jelajah</p>
          <h2 className="reveal">Traveling Tanpa <em>Drama</em></h2>
          <div className="feat-grid">
            {FEATURES.map((f, i) => (
              <article key={i} className="feat-card reveal">
                <span className="feat-icon"><Icon name={f.icon} /></span>
                <h3>{f.title}</h3>
                <p>{f.desc}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="testimoni" className="section">
        <div className="container">
          <p className="eyebrow reveal">Kata Traveler</p>
          <h2 className="reveal">Cerita <em>Perjalanan</em> Mereka</h2>
          <div className="testi-grid">
            {TESTIS.map((t, i) => (
              <article key={i} className="testi-card reveal">
                <span className="stars"><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /><Icon name="star" /></span>
                <p>"{t.text}"</p>
                <div className="testi-user"><span className="avatar">{t.name[0]}</span><div><strong>{t.name}</strong><span>{t.trip}</span></div></div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="cta" className="cta">
        <div className="container cta-box reveal">
          <h2>Siap Berpetualang<br />Minggu Depan?</h2>
          <p>Konsultasi gratis — ceritakan trip impianmu, kami yang rancang itinerary-nya.</p>
          <div className="cta-actions">
            <a href="#" className="btn btn-light">Chat WhatsApp</a>
            <a href="#destinasi" className="btn btn-outline-light">Lihat Paket Trip</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div><a className="logo" href="#"><span className="logo-mark"><Icon name="plane" /></span>Jelajah</a><p>Biro perjalanan terpercaya sejak 2016. Berizin resmi Kemenparekraf.</p></div>
          <div><h4>Destinasi</h4><a href="#">Bali</a><a href="#">Raja Ampat</a><a href="#">Bromo</a><a href="#">Yogyakarta</a></div>
          <div><h4>Perusahaan</h4><a href="#">Tentang Kami</a><a href="#">Karier</a><a href="#">Blog</a></div>
          <div><h4>Kontak</h4><a href="#">WhatsApp</a><a href="#">Instagram</a><a href="#">Email</a></div>
        </div>
        <div className="container footer-bottom"><p>© 2026 Jelajah Travel. Seluruh hak cipta dilindungi.</p></div>
      </footer>
    </div>
  )
}
