/**
 * Naava N. Hedwig - Interactive Tech CV
 * Modern, tech-focused design with 3D elements and interactive features
 */

// Initialize custom cursor
document.addEventListener('DOMContentLoaded', () => {
  const cursor = document.querySelector('.custom-cursor');
  const cursorFollower = document.querySelector('.cursor-follower');
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
    
    setTimeout(() => {
      cursorFollower.style.left = e.clientX + 'px';
      cursorFollower.style.top = e.clientY + 'px';
    }, 100);
  });
  
  document.addEventListener('mouseover', (e) => {
    if (
      e.target.tagName === 'A' ||
      e.target.tagName === 'BUTTON' ||
      e.target.classList.contains('interactive') ||
      e.target.closest('a') ||
      e.target.closest('button') ||
      e.target.closest('.interactive')
    ) {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1.2)';
      cursorFollower.style.opacity = '0.5';
    } else {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
      cursorFollower.style.opacity = '0.8';
    }
  });
  
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(0.8)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(0.8)';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'translate(-50%, -50%) scale(1)';
    cursorFollower.style.transform = 'translate(-50%, -50%) scale(1)';
  });
  
  // Hide default cursor
  document.body.style.cursor = 'none';
});

// Mobile menu toggle
document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.querySelector('.menu-toggle');
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('.nav-menu');
  
  menuToggle.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });
  
  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.nav-links a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
});

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.querySelector('.navbar');
  
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.style.padding = '1rem 0';
      navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.9)';
    } else {
      navbar.style.padding = '1.5rem 0';
      navbar.style.backgroundColor = 'rgba(10, 25, 47, 0.8)';
    }
  });
});

// Active section highlighting
document.addEventListener('DOMContentLoaded', () => {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-links a');
  
  window.addEventListener('scroll', () => {
    let current = '';
    const scrollPosition = window.scrollY + 100;
    
    sections.forEach(section => {
      const sectionTop = section.offsetTop;
      const sectionHeight = section.offsetHeight;
      
      if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
        current = section.getAttribute('id');
      }
    });
    
    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });
});

// Experience timeline interaction
document.addEventListener('DOMContentLoaded', () => {
  const timelineNodes = document.querySelectorAll('.timeline-node');
  const experienceCards = document.querySelectorAll('.experience-card');
  
  timelineNodes.forEach(node => {
    node.addEventListener('click', () => {
      const targetId = node.getAttribute('data-id');
      
      // Update timeline nodes
      timelineNodes.forEach(n => n.classList.remove('active'));
      node.classList.add('active');
      
      // Update experience cards
      experienceCards.forEach(card => {
        card.classList.remove('active');
        if (card.id === targetId) {
          card.classList.add('active');
        }
      });
    });
  });
});

// Projects filtering
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.projects-filter .filter-btn');
  const projectCards = document.querySelectorAll('.project-card');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter projects
      projectCards.forEach(card => {
        if (filter === 'all') {
          card.style.display = 'flex';
        } else {
          const categories = card.getAttribute('data-categories');
          if (categories && categories.includes(filter)) {
            card.style.display = 'flex';
          } else {
            card.style.display = 'none';
          }
        }
      });
    });
  });
});

// Skills filtering
document.addEventListener('DOMContentLoaded', () => {
  const filterButtons = document.querySelectorAll('.skills-filter .filter-btn');
  const skillItems = document.querySelectorAll('.skill-item');
  
  filterButtons.forEach(button => {
    button.addEventListener('click', () => {
      const filter = button.getAttribute('data-filter');
      
      // Update active button
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      
      // Filter skills
      skillItems.forEach(item => {
        if (filter === 'all') {
          item.style.display = 'block';
        } else {
          const categories = item.getAttribute('data-categories');
          if (categories && categories.includes(filter)) {
            item.style.display = 'block';
          } else {
            item.style.display = 'none';
          }
        }
      });
    });
  });
});

// Contact form submission
document.addEventListener('DOMContentLoaded', () => {
  const contactForm = document.getElementById('contactForm');
  const formSuccess = document.querySelector('.form-success');
  
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      
      // Simulate form submission
      setTimeout(() => {
        formSuccess.classList.add('active');
        contactForm.reset();
        
        // Reset form after 5 seconds
        setTimeout(() => {
          formSuccess.classList.remove('active');
        }, 5000);
      }, 1000);
    });
  }
});

// Update current year in footer
document.addEventListener('DOMContentLoaded', () => {
  const yearElement = document.getElementById('current-year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});

// Initialize Three.js scenes
document.addEventListener('DOMContentLoaded', () => {
  // Hero canvas
  const heroCanvas = document.getElementById('hero-canvas');
  if (heroCanvas) {
    initHeroScene(heroCanvas);
  }
  
  // Skills canvas
  const skillsCanvas = document.getElementById('skills-canvas');
  if (skillsCanvas) {
    initSkillsScene(skillsCanvas);
  }
  
  // Projects canvas
  const projectsCanvas = document.getElementById('projects-canvas');
  if (projectsCanvas) {
    initProjectsScene(projectsCanvas);
  }
  
  // Skills bubble canvas
  const skillsBubbleCanvas = document.getElementById('skills-bubble-canvas');
  if (skillsBubbleCanvas) {
    initSkillsBubbleScene(skillsBubbleCanvas);
  }
  
  // Contact canvas
  const contactCanvas = document.getElementById('contact-canvas');
  if (contactCanvas) {
    initContactScene(contactCanvas);
  }
});

// Hero scene with floating text and particles
function initHeroScene(canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add point light
  const pointLight = new THREE.PointLight(0x64ffda, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);
  
  // Create particles
  const particlesGeometry = new THREE.BufferGeometry();
  const particlesCount = 2000;
  const posArray = new Float32Array(particlesCount * 3);
  
  for (let i = 0; i < particlesCount * 3; i++) {
    posArray[i] = (Math.random() - 0.5) * 10;
  }
  
  particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));
  
  const particlesMaterial = new THREE.PointsMaterial({
    size: 0.05,
    color: 0x64ffda,
    transparent: true,
    opacity: 0.8
  });
  
  const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
  scene.add(particlesMesh);
  
  // Position camera
  camera.position.z = 5;
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    
    particlesMesh.rotation.y += 0.001;
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Skills scene with 3D spheres
function initSkillsScene(canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add point light
  const pointLight = new THREE.PointLight(0x64ffda, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);
  
  // Create spheres
  const spheres = [];
  const colors = [0x64ffda, 0xbd34fe];
  
  for (let i = 0; i < 5; i++) {
    const geometry = new THREE.SphereGeometry(0.5 + Math.random() * 0.3, 16, 16);
    const material = new THREE.MeshStandardMaterial({
      color: colors[i % colors.length],
      wireframe: true
    });
    
    const sphere = new THREE.Mesh(geometry, material);
    sphere.position.set(
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5,
      (Math.random() - 0.5) * 5
    );
    
    scene.add(sphere);
    spheres.push({
      mesh: sphere,
      rotationSpeed: 0.01 + Math.random() * 0.01,
      orbitRadius: 2 + Math.random() * 2,
      orbitSpeed: 0.01 + Math.random() * 0.01,
      orbitAngle: Math.random() * Math.PI * 2
    });
  }
  
  // Position camera
  camera.position.z = 5;
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    
    spheres.forEach(sphere => {
      sphere.mesh.rotation.x += sphere.rotationSpeed;
      sphere.mesh.rotation.y += sphere.rotationSpeed;
      
      sphere.orbitAngle += sphere.orbitSpeed;
      sphere.mesh.position.x = Math.cos(sphere.orbitAngle) * sphere.orbitRadius;
      sphere.mesh.position.z = Math.sin(sphere.orbitAngle) * sphere.orbitRadius;
    });
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
}

// Projects scene with 3D cards
function initProjectsScene(canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(75, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add point light
  const pointLight = new THREE.PointLight(0x64ffda, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);
  
  // Create project cards
  const cards = [];
  const colors = [0x64ffda, 0xbd34fe];
  const positions = [
    [-2, 1, 0],
    [2, 1, -1],
    [-2, -1, -0.5],
    [2, -1, 0]
  ];
  
  for (let i = 0; i < positions.length; i++) {
    const geometry = new THREE.BoxGeometry(2, 1, 0.1);
    const material = new THREE.MeshStandardMaterial({
      color: colors[i % colors.length],
      transparent: true,
      opacity: 0.7
    });
    
    const card = new THREE.Mesh(geometry, material);
    card.position.set(...positions[i]);
    
    scene.add(card);
    cards.push({
      mesh: card,
      initialPosition: [...positions[i]],
      hoverOffset: 0.2
    });
  }
  
  // Position camera
  camera.position.z = 5;
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    
    scene.rotation.y += 0.002;
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
}

// Skills bubble scene
function initSkillsBubbleScene(canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add point light
  const pointLight = new THREE.PointLight(0x64ffda, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);
  
  // Create skill bubbles
  const bubbles = [];
  const skills = [
    { name: 'Python', level: 0.95, color: 0x64ffda },
    { name: 'NLP', level: 0.92, color: 0xbd34fe },
    { name: 'Data', level: 0.9, color: 0x64ffda },
    { name: 'AI', level: 0.88, color: 0xbd34fe },
    { name: 'React', level: 0.85, color: 0x64ffda },
    { name: 'ML', level: 0.9, color: 0xbd34fe },
    { name: 'RAG', level: 0.95, color: 0x64ffda },
    { name: 'LLM', level: 0.92, color: 0xbd34fe },
    { name: 'QGIS', level: 0.88, color: 0x64ffda },
    { name: 'FastAPI', level: 0.9, color: 0xbd34fe }
  ];
  
  for (let i = 0; i < skills.length; i++) {
    const angle = (i / skills.length) * Math.PI * 2;
    const radius = 5;
    const x = Math.cos(angle) * radius;
    const y = Math.sin(angle) * radius;
    const z = (Math.random() - 0.5) * 2;
    const size = skills[i].level * 1.2;
    
    const geometry = new THREE.SphereGeometry(size, 16, 16);
    const material = new THREE.MeshStandardMaterial({
      color: skills[i].color,
      transparent: true,
      opacity: 0.7
    });
    
    const bubble = new THREE.Mesh(geometry, material);
    bubble.position.set(x, y, z);
    
    scene.add(bubble);
    bubbles.push({
      mesh: bubble,
      initialPosition: [x, y, z],
      orbitSpeed: 0.005 + Math.random() * 0.005,
      orbitAngle: angle
    });
  }
  
  // Position camera
  camera.position.z = 15;
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    
    bubbles.forEach(bubble => {
      bubble.orbitAngle += bubble.orbitSpeed;
      const radius = 5;
      bubble.mesh.position.x = Math.cos(bubble.orbitAngle) * radius;
      bubble.mesh.position.y = Math.sin(bubble.orbitAngle) * radius;
    });
    
    scene.rotation.y += 0.001;
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
}

// Contact scene with 3D form
function initContactScene(canvas) {
  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, canvas.clientWidth / canvas.clientHeight, 0.1, 1000);
  const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
  
  renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  
  // Add ambient light
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
  scene.add(ambientLight);
  
  // Add point light
  const pointLight = new THREE.PointLight(0x64ffda, 1);
  pointLight.position.set(10, 10, 10);
  scene.add(pointLight);
  
  // Create form box
  const geometry = new THREE.BoxGeometry(3, 2, 0.2);
  const material = new THREE.MeshStandardMaterial({
    color: 0x0a192f
  });
  
  const formBox = new THREE.Mesh(geometry, material);
  formBox.rotation.y = Math.PI / 4;
  scene.add(formBox);
  
  // Position camera
  camera.position.z = 5;
  
  // Animation loop
  const animate = () => {
    requestAnimationFrame(animate);
    
    formBox.rotation.y += 0.005;
    
    renderer.render(scene, camera);
  };
  
  animate();
  
  // Handle window resize
  window.addEventListener('resize', () => {
    camera.aspect = canvas.clientWidth / canvas.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(canvas.clientWidth, canvas.clientHeight);
  });
}

// Initialize particles.js
document.addEventListener('DOMContentLoaded', () => {
  const particlesContainer = document.getElementById('particles-js');
  if (particlesContainer && window.particlesJS) {
    particlesJS('particles-js', {
      particles: {
        number: {
          value: 80,
          density: {
            enable: true,
            value_area: 800
          }
        },
        color: {
          value: '#64ffda'
        },
        shape: {
          type: 'circle',
          stroke: {
            width: 0,
            color: '#000000'
          }
        },
        opacity: {
          value: 0.5,
          random: false,
          anim: {
            enable: false
          }
        },
        size: {
          value: 3,
          random: true,
          anim: {
            enable: false
          }
        },
        line_linked: {
          enable: true,
          distance: 150,
          color: '#64ffda',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 2,
          direction: 'none',
          random: false,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: {
            enable: false,
            rotateX: 600,
            rotateY: 1200
          }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: {
            enable: true,
            mode: 'grab'
          },
          onclick: {
            enable: true,
            mode: 'push'
          },
          resize: true
        },
        modes: {
          grab: {
            distance: 140,
            line_linked: {
              opacity: 1
            }
          },
          push: {
            particles_nb: 4
          }
        }
      },
      retina_detect: true
    });
  }
});
