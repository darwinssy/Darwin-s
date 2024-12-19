<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <meta http-equiv="X-UA-Compatible" content="ie=edge">
  <title>Haikal's Website</title>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css">
  <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.css">
  <style>
  
body {
  background-color: black;
  color: white; /* Untuk memastikan teks terlihat */
}
    .navbar {
      background: linear-gradient(45deg, #4a90e2, #9013fe);
    }
    .navbar-brand {
      color: white;
      font-weight: bold;
    }
    .navbar-nav .nav-link {
      color: white;
      font-weight: 500;
    }
    .btn-brand {
      background: #4a90e2;
      color: white;
      transition: all 0.3s;
    }
    .btn-brand:hover {
      background: #9013fe;
      color: white;
    }
    #home {
      background: url('https://source.unsplash.com/1600x900/?nature,technology') no-repeat center center/cover;
    }
    #home h1 span {
      color: #9013fe;
    }
    #about {
      background: #black;
    }
    .about i {
      color: #9013fe;
    }
    footer {
      background: #333;
      color: white;
    }
    footer a {
      color: #9013fe;
      text-decoration: none;
    }
    footer a:hover {
      color: #4a90e2;
    }
    
    /* DNA Logo */
.logo {
  position: relative;
  display: inline-block;
  animation: floating 5s infinite ease-in-out;
}

.dna {
  width: 120px;
  height: 180px;
  background: linear-gradient(to bottom, #48d1cc, #8a2be2);
  clip-path: polygon(50% 0%, 70% 20%, 60% 50%, 70% 80%, 50% 100%, 30% 80%, 40% 50%, 30% 20%);
  box-shadow: 0 0 20px rgba(72, 209, 204, 0.6), 0 0 30px rgba(138, 43, 226, 0.6);
  transform-origin: center;
  transform: rotateX(45deg) rotateZ(15deg);
  animation: spin 10s linear infinite;
}

.dna::before,
.dna::after {
  content: '';
  width: 8px;
  height: 120px;
  background-color: rgba(138, 43, 226, 0.6);
  position: absolute;
  border-radius: 50px;
  top: 10%;
  left: 50%;
  transform: translateX(-50%);
  animation: moveDots 5s infinite linear;
}

.dna::after {
  animation-direction: reverse;
}

/* Judul Neon */
.title {
  font-size: 3rem;
  color: #d1f8ff;
  text-shadow: 0 0 10px #00e5ff, 0 0 20px #00e5ff, 0 0 40px #00e5ff;
  margin-top: 20px;
  transition: transform 0.3s ease-in-out;
  animation: glow 2s infinite alternate;
}

.title:hover {
  transform: scale(1.1);
  text-shadow: 0 0 15px #00f7ff, 0 0 30px #00f7ff, 0 0 60px #00f7ff;
}

/* Subtitle */
.subtitle {
  font-size: 1rem;
  letter-spacing: 3px;
  color: #b0c4de;
  text-shadow: 0 0 5px #008b8b, 0 0 15px #008b8b;
  margin-top: 10px;
  animation: blink 2s infinite;
}

/* Animasi */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: scale(0.8);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}

@keyframes floating {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
}

@keyframes spin {
  0% {
    transform: rotateX(45deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(45deg) rotateZ(360deg);
  }
}

@keyframes moveDots {
  0% {
    top: 10%;
  }
  100% {
    top: 90%;
  }
}

@keyframes glow {
  from {
    text-shadow: 0 0 10px #00e5ff, 0 0 20px #00e5ff, 0 0 40px #00e5ff;
  }
  to {
    text-shadow: 0 0 15px #00f7ff, 0 0 30px #00f7ff, 0 0 60px #00f7ff;
  }
}

@keyframes blink {
  50% {
    opacity: 0.5;
  }
}

.logo {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 20px;
}

.dna .strand {
  width: 50px;
  height: 50px;
  background-color: green;
  border-radius: 50%;
  animation: spin 2s infinite linear;
}

@keyframes spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}


    
  </style>
</head>
<body>
  <!-- Navbar -->
  <nav class="navbar navbar-expand-lg navbar-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Haikal</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse"
        data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
        aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav mx-auto">
          <li class="nav-item"><a class="nav-link active" href="#home">Home</a></li>
          <li class="nav-item"><a class="nav-link" href="#about">About</a></li>
          <li class="nav-item"><a class="nav-link" href="#project">Project</a></li>
          <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
        </ul>
      </div>
    </div>
  </nav>

  <!-- Home Section -->
  <section id="home" class="d-flex align-items-center min-vh-100 text-white text-center">
    <div class="container">
      <h1 class="display-2 fw-bold" data-aos="fade-up">Hai, Saya <span>Haikal</span></h1>
      <p class="mt-4" data-aos="fade-up" data-aos-delay="200">
        Nama lengkap saya adalah Haikal Alam Darwisy. Saya percaya pada
        kemenangan (win) dalam setiap langkah hidup. Maka dari situlah nama
        Darwin terbuat
      </p>
        <div class="container">
    <!-- DNA Logo -->
    <div class="logo">
      <div class="dna">
        <span class="strand"></span>
      </div>
    </div>

    <!-- Judul -->
    <h1 class="title">DARWIN'S</h1>
    <p class="subtitle">THE ORIGIN OF DARWIN'S</p>
    <a href="https://wa.me/message/QR57PISBUY56F1" class="btn btn-brand
    mt-3" data-aos="fade-up" data-aos-delay="400">Hubungi Saya</a>
  </div>
    </div>
  </section>

  <!-- About Section -->
  <section id="about" class="py-5">
    <div class="container text-center">
      <h1 data-aos="fade-down">About Me</h1>
      <p data-aos="fade-down" data-aos-delay="200">Saya seorang pelajar yang senang belajar teknologi dan seni.</p>
      <div class="row mt-4">
        <div class="col-lg-3 col-sm-6" data-aos="zoom-in">
          <div class="about py-4 px-3 border rounded">
            <i class="ri-blogger-fill display-4 mb-3"></i>
            <h5>My Blog</h5>
            <p>Saya menulis berbagai artikel tentang teknologi dan kehidupan.</p>
            <a href="https://darwinssy.wordpress.com/" class="btn btn-brand
    mt-3" data-aos="fade-up" data-aos-delay="400">Visit my blog</a>
          </div>
        </div>
        <div class="col-lg-3 col-sm-6" data-aos="zoom-in" data-aos-delay="200">
          <div class="about py-4 px-3 border rounded">
            <i class="ri-gallery-fill display-4 mb-3"></i>
            <h5>My Gallery</h5>
            <p>Koleksi fotografi dan karya seni yang saya buat.</p>
            <a
            href="https://www.instagram.com/ikall_1945/profilecard/?igsh=MW50dTg4d3YxbnExOQ=="
            class="btn btn-brand
    mt-3" data-aos="fade-up" data-aos-delay="400">Visit my gallery</a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <!-- Project Section -->
  <section id="project" class="py-5 bg-night">
    <div class="container text-center">
      <h1 data-aos="fade-down">Project</h1>
      <p data-aos="fade-down" data-aos-delay="200">Beberapa proyek yang telah saya kerjakan.</p>
      <div class="row mt-4">
        <div class="col-lg-4 col-md-6 mb-4" data-aos="fade-up">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Project 1</h5>
              <p class="card-text">Deskripsi singkat mengenai project ini.</p>
              <a href="https://github.com/dashboard" class="btn btn-brand">Pelajari Lebih Lanjut</a>
            </div>
          </div>
        </div>
        <!-- Tambahkan lebih banyak project di sini -->
      </div>
    </div>
  </section>

  <!-- Footer -->
  <footer class="py-4">
    <div class="container text-center">
      <p>&copy; 2024 Haikal Allam Darwisy. All Rights Reserved.</p>
      <a href="https://www.facebook.com/profile.php?id=100041040322619"><i class="ri-facebook-fill me-3"></i></a>
      <a
      href="https://www.instagram.com/ikall_1945/profilecard/?igsh=MW50dTg4d3YxbnExOQ=="><i
      class="ri-instagram-fill"></i></a>
    </div>
  </footer>

  <!-- Script -->
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/aos/2.3.4/aos.js"></script>
  <script>
    AOS.init();
  </script>
</body>
</html>
