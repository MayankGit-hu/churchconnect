/* ============================================================
   ChurchConnect — Main Application JavaScript
   Data, UI logic, particles, animations, modals
   ============================================================ */

'use strict';

// ─────────────────────────────────────────────
// CHURCH DATA
// ─────────────────────────────────────────────
const churchesData = [
  { id: 1, name: 'Lakewood Church', city: 'Houston', state: 'Texas', denomination: 'Non-Denominational', size: 52000, jobs: 14, founded: '1959', description: 'Lakewood Church is one of the largest and most vibrant churches in America, holding weekly services that inspire hope and faith across the greater Houston community.' },
  { id: 2, name: 'Gateway Church', city: 'Southlake', state: 'Texas', denomination: 'Non-Denominational', size: 36000, jobs: 9, founded: '2000', description: 'Gateway Church is a multi-campus church committed to leading people to become fully devoted followers of Christ.' },
  { id: 3, name: 'Life.Church', city: 'Edmond', state: 'Oklahoma', denomination: 'Non-Denominational', size: 100000, jobs: 22, founded: '1996', description: 'Life.Church is a multi-site church with 40+ locations and a global reach through the YouVersion Bible App, serving millions worldwide.' },
  { id: 4, name: 'Second Baptist Church', city: 'Houston', state: 'Texas', denomination: 'Baptist', size: 23000, jobs: 7, founded: '1927', description: 'Second Baptist Houston is a traditional Baptist church committed to biblical exposition and servant-hearted ministry across Houston.' },
  { id: 5, name: 'North Point Community', city: 'Alpharetta', state: 'Georgia', denomination: 'Non-Denominational', size: 41000, jobs: 11, founded: '1995', description: 'North Point Community Church creates environments where people can hear and experience the unconditional love of God.' },
  { id: 6, name: 'Saddleback Church', city: 'Lake Forest', state: 'California', denomination: 'Baptist', size: 22000, jobs: 8, founded: '1980', description: 'Saddleback Church is a purpose-driven church founded by Rick Warren, focused on the five purposes of worship, fellowship, discipleship, ministry, and evangelism.' },
  { id: 7, name: 'Willow Creek Community', city: 'South Barrington', state: 'Illinois', denomination: 'Non-Denominational', size: 25000, jobs: 10, founded: '1975', description: 'Willow Creek Community Church has been a pioneering church in contemporary worship and seeker-sensitive ministry for five decades.' },
  { id: 8, name: 'New Life Church', city: 'Colorado Springs', state: 'Colorado', denomination: 'Non-Denominational', size: 12000, jobs: 6, founded: '1984', description: 'New Life Church is a vibrant, Spirit-filled congregation in the heart of Colorado Springs with a heart for healing and restoration.' },
  { id: 9, name: 'Church of the Resurrection', city: 'Leawood', state: 'Kansas', denomination: 'Methodist', size: 22000, jobs: 8, founded: '1990', description: 'United Methodist Church of the Resurrection is dedicated to building a community of Christians for spiritual growth and community impact.' },
  { id: 10, name: 'Prestonwood Baptist Church', city: 'Plano', state: 'Texas', denomination: 'Baptist', size: 45000, jobs: 12, founded: '1977', description: 'Prestonwood Baptist Church is a multi-campus Baptist congregation committed to reaching the greater Dallas area for Christ.' },
  { id: 11, name: 'Elevation Church', city: 'Charlotte', state: 'North Carolina', denomination: 'Baptist', size: 28000, jobs: 15, founded: '2006', description: 'Elevation Church exists so that people far from God will be raised to life in Christ, with campuses across the Carolinas.' },
  { id: 12, name: 'Christ Fellowship', city: 'Palm Beach Gardens', state: 'Florida', denomination: 'Non-Denominational', size: 20000, jobs: 7, founded: '1984', description: 'Christ Fellowship is a multi-campus church in South Florida committed to helping people find and follow Jesus.' },
  { id: 13, name: 'Southeast Christian Church', city: 'Louisville', state: 'Kentucky', denomination: 'Church of Christ', size: 22000, jobs: 9, founded: '1962', description: 'Southeast Christian Church is one of the largest churches in America with a strong commitment to biblical teaching and community service.' },
  { id: 14, name: 'Hillsong Church NYC', city: 'New York', state: 'New York', denomination: 'Assemblies of God', size: 8000, jobs: 5, founded: '2010', description: 'Hillsong NYC brings the global Hillsong worship movement to New York City, fostering a vibrant community of faith in the heart of Manhattan.' },
  { id: 15, name: 'Mars Hill Bible Church', city: 'Grandville', state: 'Michigan', denomination: 'Non-Denominational', size: 10000, jobs: 4, founded: '1999', description: 'Mars Hill Bible Church in West Michigan focuses on community engagement, social justice, and progressive Christianity.' },
  { id: 16, name: 'Christ Church of the Valley', city: 'Peoria', state: 'Arizona', denomination: 'Non-Denominational', size: 32000, jobs: 10, founded: '1982', description: 'CCV is a multi-campus church in Arizona with a passion for helping people live the life they were created to live.' },
  { id: 17, name: 'First Baptist Dallas', city: 'Dallas', state: 'Texas', denomination: 'Baptist', size: 13000, jobs: 6, founded: '1868', description: 'First Baptist Dallas is one of the oldest and most historic Baptist churches in America with a vibrant contemporary campus.' },
  { id: 18, name: 'Church of the King', city: 'New Orleans', state: 'Louisiana', denomination: 'Non-Denominational', size: 5000, jobs: 3, founded: '2001', description: 'Church of the King is an energetic, multi-ethnic congregation in New Orleans with a heart for the urban community.' },
  { id: 19, name: 'McLean Bible Church', city: 'Vienna', state: 'Virginia', denomination: 'Non-Denominational', size: 15000, jobs: 7, founded: '1961', description: 'McLean Bible Church serves the Washington DC metro area with a commitment to bold biblical teaching and community impact.' },
  { id: 20, name: 'Crossroads Church', city: 'Cincinnati', state: 'Ohio', denomination: 'Non-Denominational', size: 14000, jobs: 6, founded: '1996', description: 'Crossroads Church in Cincinnati is known for creative arts, community care initiatives, and passionate worship.' },
  { id: 21, name: 'Bay Area Fellowship', city: 'Corpus Christi', state: 'Texas', denomination: 'Non-Denominational', size: 9000, jobs: 4, founded: '1991', description: 'Bay Area Fellowship is the largest church in the Corpus Christi area with a focus on outreach and practical biblical teaching.' },
  { id: 22, name: 'People\'s Church', city: 'Franklin', state: 'Tennessee', denomination: 'Non-Denominational', size: 7000, jobs: 4, founded: '2005', description: 'People\'s Church is a welcoming multi-ethnic congregation in the Nashville suburbs focused on unity and Kingdom impact.' },
  { id: 23, name: 'The Village Church', city: 'Flower Mound', state: 'Texas', denomination: 'Baptist', size: 12000, jobs: 5, founded: '2001', description: 'The Village Church is a Reformed Baptist church in North Texas with multiple campuses focused on gospel-centered community.' },
  { id: 24, name: 'Church Unlimited', city: 'Corpus Christi', state: 'Texas', denomination: 'Non-Denominational', size: 6000, jobs: 3, founded: '2000', description: 'Church Unlimited is committed to building unlimited people for unlimited impact in South Texas.' },
];

// ─────────────────────────────────────────────
// JOBS DATA
// ─────────────────────────────────────────────
const jobsData = [
  {
    id: 1, icon: '🎤', title: 'Senior Pastor', church: 'Lakewood Church', location: 'Houston, TX', state: 'Texas',
    denomination: 'Non-Denominational', type: 'Full-Time', salary: '$85,000 – $120,000/yr', salaryMax: 120000,
    posted: '2 days ago', description: 'Lead our flagship congregation with visionary preaching, pastoral care, and strategic ministry direction.',
    fullDescription: 'Lakewood Church is seeking a dynamic Senior Pastor to lead our growing congregation in Houston, TX. The ideal candidate will be a gifted communicator with a passion for expository preaching, strong leadership skills, and a heart for pastoral care. This role requires strategic leadership, community engagement, and the ability to inspire and equip a diverse congregation of over 52,000 members.',
    responsibilities: ['Deliver weekly sermons that are biblically grounded and contextually relevant', 'Provide spiritual oversight and vision for all ministry departments', 'Shepherd and mentor staff pastors and ministry leaders', 'Build community partnerships and lead outreach initiatives', 'Oversee strategic planning and budget alignment with vision'],
    qualifications: ['Master of Divinity (MDiv) from an accredited seminary', 'Minimum 10 years of pastoral ministry experience', 'Proven track record of church growth and leadership development', 'Exceptional preaching and communication skills', 'Strong theology aligned with evangelical Christian tradition'],
    skills: ['Preaching', 'Leadership', 'Pastoral Care', 'Strategic Planning', 'Evangelism'],
  },
  {
    id: 2, icon: '🎸', title: 'Worship Director', church: 'Gateway Church', location: 'Southlake, TX', state: 'Texas',
    denomination: 'Non-Denominational', type: 'Full-Time', salary: '$55,000 – $75,000/yr', salaryMax: 75000,
    posted: '3 days ago', description: 'Lead and develop our worship arts team across multiple campuses with creativity and spiritual integrity.',
    fullDescription: 'Gateway Church is seeking a talented Worship Director to oversee our worship ministry across multiple campuses. You will lead a team of musicians, vocalists, and technical directors to create transformative worship experiences that draw people into the presence of God.',
    responsibilities: ['Lead weekly worship services with excellence and spiritual authenticity', 'Recruit, mentor, and develop volunteer and paid worship team members', 'Oversee set-list planning, arrangement, and rehearsal scheduling', 'Collaborate with pastoral staff for sermon series alignment', 'Manage worship budget and equipment maintenance'],
    qualifications: ['Bachelor\'s degree in Music, Worship Arts, or related field preferred', '5+ years of worship ministry leadership experience', 'Proficiency in multiple instruments (keys, guitar preferred)', 'Experience with ProPresenter, Ableton, and in-ear monitor systems', 'Strong theology of worship and Spirit-led leadership'],
    skills: ['Music Direction', 'Worship Planning', 'Team Leadership', 'ProPresenter', 'Audio/Visual'],
  },
  {
    id: 3, icon: '👦', title: 'Youth Pastor', church: 'North Point Community', location: 'Alpharetta, GA', state: 'Georgia',
    denomination: 'Non-Denominational', type: 'Full-Time', salary: '$45,000 – $60,000/yr', salaryMax: 60000,
    posted: '1 week ago', description: 'Develop and lead dynamic youth programs that disciple middle and high school students.',
    fullDescription: 'North Point Community Church is looking for a passionate Youth Pastor to lead our Student Ministry. You\'ll build relationships with students in grades 6–12, develop curriculum, and create environments where teenagers encounter Jesus.',
    responsibilities: ['Plan and execute weekly youth services and mid-week programs', 'Recruit, train, and mobilize volunteer youth leaders', 'Develop curriculum and teaching series for middle and high school', 'Organize youth retreats, mission trips, and special events', 'Engage with parents and families for holistic student development'],
    qualifications: ['Bachelor\'s degree in Youth Ministry, Bible, or related field', '3+ years of student ministry experience', 'Passionate about adolescent spiritual formation', 'High energy, relational, and culturally relevant communication style', 'Safe church certification and background check required'],
    skills: ['Youth Ministry', 'Discipleship', 'Curriculum Development', 'Event Planning', 'Parent Engagement'],
  },
  {
    id: 4, icon: '👧', title: "Children's Ministry Director", church: 'Saddleback Church', location: 'Lake Forest, CA', state: 'California',
    denomination: 'Baptist', type: 'Full-Time', salary: '$50,000 – $68,000/yr', salaryMax: 68000,
    posted: '5 days ago', description: 'Oversee KidZone ministry for birth through 5th grade with excellence and love.',
    fullDescription: 'Saddleback Church seeks a dedicated Children\'s Ministry Director to lead our award-winning KidZone children\'s program. You\'ll oversee curriculum, volunteer management, and safety protocols for our 2,000+ kids ministry.',
    responsibilities: ['Manage and develop a team of 200+ children\'s volunteers', 'Oversee age-appropriate curriculum from nursery through 5th grade', 'Implement and enforce all child safety and protection policies', 'Coordinate holiday programs, VBS, and special events', 'Partner with parents for holistic child discipleship'],
    qualifications: ['Bachelor\'s in Early Childhood Education, Ministry, or related field', '5+ years in children\'s ministry with leadership experience', 'Strong organizational and team-building skills', 'Knowledge of child development best practices', 'CPR/First Aid certified'],
    skills: ["Children's Ministry", 'Volunteer Management', 'Curriculum', 'Child Safety', 'Event Planning'],
  },
  {
    id: 5, icon: '🌍', title: 'Outreach & Missions Coordinator', church: 'Life.Church', location: 'Edmond, OK', state: 'Oklahoma',
    denomination: 'Non-Denominational', type: 'Full-Time', salary: '$42,000 – $55,000/yr', salaryMax: 55000,
    posted: '1 week ago', description: 'Mobilize the congregation for local and global missions through compelling vision and logistics.',
    fullDescription: 'Life.Church is seeking a Missions Coordinator who will champion our "Reach" vision — mobilizing thousands of members to serve locally and internationally. You\'ll partner with global mission organizations and oversee short-term team trips.',
    responsibilities: ['Develop and manage local community outreach programs', 'Coordinate 20+ international mission trips annually', 'Build and maintain relationships with partner mission organizations', 'Train and equip mission team leaders', 'Communicate mission stories through multiple channels'],
    qualifications: ['Bachelor\'s degree in Missions, Intercultural Studies, or Ministry', '3+ years of missions or outreach ministry experience', 'Cross-cultural experience required', 'Willingness to travel internationally 4–6 times per year', 'Strong project management and communication skills'],
    skills: ['Missions', 'Outreach', 'Cross-Cultural', 'Project Management', 'Evangelism'],
  },
  {
    id: 6, icon: '📊', title: 'Church Administrator', church: 'Willow Creek Community', location: 'South Barrington, IL', state: 'Illinois',
    denomination: 'Non-Denominational', type: 'Full-Time', salary: '$55,000 – $72,000/yr', salaryMax: 72000,
    posted: '4 days ago', description: 'Manage the operational and administrative functions of our multi-ministry church campus.',
    fullDescription: 'Willow Creek Community Church needs a skilled Church Administrator to oversee daily operations including facilities, HR, finance coordination, and vendor management for our flagship 150-acre campus.',
    responsibilities: ['Oversee facility operations, maintenance, and scheduling', 'Manage HR functions including onboarding and benefits administration', 'Coordinate with ministry leaders for budget planning and reporting', 'Supervise administrative support staff', 'Maintain vendor contracts and building compliance'],
    qualifications: ['Bachelor\'s degree in Business Administration or related field', '5+ years of administrative leadership experience', 'Experience in non-profit or church administration preferred', 'Proficiency in ChMS software (Planning Center preferred)', 'Exceptional organizational and leadership skills'],
    skills: ['Administration', 'HR', 'Facilities Management', 'Planning Center', 'Budget Management'],
  },
  {
    id: 7, icon: '💬', title: 'Pastoral Counselor', church: 'Church of the Resurrection', location: 'Leawood, KS', state: 'Kansas',
    denomination: 'Methodist', type: 'Full-Time', salary: '$50,000 – $65,000/yr', salaryMax: 65000,
    posted: '2 weeks ago', description: 'Provide licensed pastoral counseling and support to congregation members in crisis and need.',
    fullDescription: 'Church of the Resurrection seeks a compassionate Pastoral Counselor to join our Care Ministry team. You\'ll offer individual, couples, and family counseling from a Christian worldview while connecting members to additional professional resources.',
    responsibilities: ['Provide individual, couples, and family counseling sessions', 'Assess and respond to pastoral care and crisis situations', 'Collaborate with pastoral staff for holistic congregant support', 'Develop and facilitate support groups', 'Maintain appropriate documentation and referral network'],
    qualifications: ['Master\'s in Counseling, Social Work, or Clinical Psychology required', 'Licensed Professional Counselor (LPC) or equivalent preferred', 'Commitment to integrating faith and clinical practice', '3+ years of counseling experience', 'Crisis intervention training'],
    skills: ['Counseling', 'Crisis Care', 'Group Therapy', 'Pastoral Care', 'Spiritual Direction'],
  },
  {
    id: 8, icon: '📸', title: 'Media & Communications Director', church: 'Elevation Church', location: 'Charlotte, NC', state: 'North Carolina',
    denomination: 'Baptist', type: 'Full-Time', salary: '$58,000 – $78,000/yr', salaryMax: 78000,
    posted: '6 days ago', description: 'Lead all digital, social, and broadcast communications strategy for a church reaching millions online.',
    fullDescription: 'Elevation Church seeks a creative and strategic Communications Director to oversee our brand, digital presence, and multimedia production. You\'ll lead a team of designers, videographers, and writers to communicate the Gospel with excellence.',
    responsibilities: ['Develop and execute comprehensive communications strategy', 'Oversee social media channels with 1M+ combined followers', 'Lead media production team for weekend services and YouTube content', 'Manage website, email campaigns, and app content', 'Coordinate with pastoral staff for messaging alignment'],
    qualifications: ['Bachelor\'s in Communications, Marketing, or Media', '5+ years of communications leadership experience', 'Proven track record in digital content strategy', 'Proficiency in Adobe Creative Suite and video production', 'Understanding of church culture and ministry communication'],
    skills: ['Communications', 'Social Media', 'Video Production', 'Adobe Suite', 'Brand Strategy'],
  },
  {
    id: 9, icon: '🤲', title: 'Small Groups Pastor', church: 'New Life Church', location: 'Colorado Springs, CO', state: 'Colorado',
    denomination: 'Non-Denominational', type: 'Full-Time', salary: '$48,000 – $62,000/yr', salaryMax: 62000,
    posted: '3 days ago', description: 'Build and sustain a thriving small groups culture connecting hundreds of families in community.',
    fullDescription: 'New Life Church is looking for a Small Groups Pastor to develop and grow our community groups ministry. You\'ll recruit, train, and empower group leaders while creating systems for church-wide connection and discipleship.',
    responsibilities: ['Cast vision and strategy for small groups ministry', 'Recruit, train, and coach 100+ group leaders', 'Develop curriculum and resources for small group use', 'Oversee church-wide campaigns and small group launches', 'Track engagement metrics and report to lead pastor'],
    qualifications: ['Bachelor\'s in Ministry, Theology, or related field', '4+ years of small groups or discipleship ministry experience', 'Strong relational and organizational skills', 'Experience with church management software', 'Heart for community and authentic discipleship'],
    skills: ['Small Groups', 'Discipleship', 'Leadership Development', 'Community Building', 'Curriculum'],
  },
  {
    id: 10, icon: '🏫', title: 'Christian Education Director', church: 'Southeast Christian Church', location: 'Louisville, KY', state: 'Kentucky',
    denomination: 'Church of Christ', type: 'Full-Time', salary: '$52,000 – $68,000/yr', salaryMax: 68000,
    posted: '1 week ago', description: 'Lead discipleship education programs for all ages from Sunday school to adult spiritual formation.',
    fullDescription: 'Southeast Christian Church seeks a Christian Education Director to develop and oversee our comprehensive discipleship pathway from birth through senior adults.',
    responsibilities: ['Design and implement discipleship curriculum across all life stages', 'Train and equip Sunday school teachers and class leaders', 'Oversee adult education programs and biblical literacy initiatives', 'Coordinate with ministry directors for integrated discipleship approach', 'Evaluate and update educational resources annually'],
    qualifications: ['Master\'s degree in Christian Education or Ministry preferred', '5+ years in Christian education leadership', 'Strong curriculum development and adult education skills', 'Knowledge of Lifeway, RightNow Media, and similar platforms', 'Passion for biblical literacy and lifelong discipleship'],
    skills: ['Christian Education', 'Curriculum Development', 'Adult Education', 'Sunday School', 'Discipleship'],
  },
  {
    id: 11, icon: '🎹', title: 'Associate Worship Leader', church: 'Prestonwood Baptist', location: 'Plano, TX', state: 'Texas',
    denomination: 'Baptist', type: 'Full-Time', salary: '$40,000 – $52,000/yr', salaryMax: 52000,
    posted: '4 days ago', description: 'Support and lead worship services at our Prosper campus with excellence and spiritual depth.',
    fullDescription: 'Prestonwood Baptist Church is seeking an Associate Worship Leader for our Prosper campus. You\'ll lead worship at weekend services, develop the campus worship team, and collaborate with our Creative Arts department.',
    responsibilities: ['Lead worship at 3 weekend services', 'Develop volunteer musicians, singers, and tech team', 'Prepare weekly set lists in collaboration with Worship Director', 'Oversee campus A/V and sound quality standards', 'Participate in monthly all-staff worship planning retreats'],
    qualifications: ['Bachelor\'s in Music, Worship Arts, or Bible preferred', '3+ years of worship leading experience', 'Proficient vocalist and instrumentalist', 'Familiarity with ProPresenter and CCLI licensing', 'Strong interpersonal and volunteer development skills'],
    skills: ['Worship Leading', 'Vocals', 'Guitar/Keys', 'ProPresenter', 'Team Development'],
  },
  {
    id: 12, icon: '🌱', title: 'Family Ministry Associate', church: 'Christ Fellowship', location: 'Palm Beach Gardens, FL', state: 'Florida',
    denomination: 'Non-Denominational', type: 'Part-Time', salary: '$22,000 – $30,000/yr', salaryMax: 30000,
    posted: '5 days ago', description: 'Support family ministry events and programming for parents and children in our Palm Beach campus.',
    fullDescription: 'Christ Fellowship is hiring a part-time Family Ministry Associate to assist in programming for families with children from birth through 5th grade.',
    responsibilities: ['Assist in planning and executing weekend family programming', 'Support volunteer coordination for children\'s check-in', 'Help create parent communication materials', 'Assist with Family Ministry events and VBS', 'Support curriculum preparation and room setup'],
    qualifications: ['Some college experience in Ministry or Education preferred', '1+ year of children\'s or family ministry experience', 'Strong relational skills with children and parents', 'Flexible schedule including Sundays', 'Background check required'],
    skills: ["Children's Ministry", 'Family Ministry', 'Volunteer Support', 'Communication', 'Event Support'],
  },
];

// ─────────────────────────────────────────────
// FEATURED CHURCHES (first 6 for homepage)
// ─────────────────────────────────────────────
function churchCardHTML(c, isModal = false) {
  const gradients = [
    'linear-gradient(135deg, #1E3A5F, #0A1628)',
    'linear-gradient(135deg, #2D1B69, #0A0E1A)',
    'linear-gradient(135deg, #1A3A2A, #0A1628)',
    'linear-gradient(135deg, #3A1E1E, #0A1628)',
    'linear-gradient(135deg, #1A2E4A, #0A0E1A)',
    'linear-gradient(135deg, #2A1A3A, #0A1628)',
  ];
  const grad = gradients[c.id % gradients.length];
  const icons = ['⛪', '🏛️', '✝️', '🙏', '🕍', '⛩️'];
  const icon = icons[c.id % icons.length];
  return `
    <div class="church-card" onclick="openChurchDetail ? openChurchDetail(${c.id}) : null">
      <div class="church-card-img" style="background:${grad}; display:flex; align-items:center; justify-content:center; font-size:3.5rem;">
        ${icon}
        <span class="church-denomination">${c.denomination}</span>
      </div>
      <div class="church-card-body">
        <h3>${c.name}</h3>
        <div class="church-location">📍 ${c.city}, ${c.state}</div>
        <div class="church-meta">
          <span>👥 ${c.size >= 1000 ? (c.size / 1000).toFixed(0) + 'K' : c.size} members</span>
          <span>📅 Est. ${c.founded}</span>
          <span class="church-jobs-badge">💼 ${c.jobs} jobs</span>
        </div>
      </div>
    </div>
  `;
}

function jobCardHTML(j, detailed = false) {
  const typeCls = {
    'Full-Time': 'badge-fulltime',
    'Part-Time': 'badge-parttime',
    'Volunteer': 'badge-volunteer',
    'Contract': 'badge-contract',
  }[j.type] || 'badge-fulltime';

  return `
    <div class="job-card" onclick="${detailed ? `openJobDetail(${j.id})` : ''}">
      <div class="job-card-top">
        <div class="job-icon">${j.icon}</div>
        <span class="job-type-badge ${typeCls}">${j.type}</span>
      </div>
      <h3>${j.title}</h3>
      <div class="job-church">⛪ ${j.church}</div>
      <div class="job-location">📍 ${j.location}</div>
      <p class="job-description">${j.description}</p>
      <div class="job-skills">
        ${j.skills.slice(0,4).map(s => `<span class="skill-chip">${s}</span>`).join('')}
      </div>
      <div class="job-card-footer">
        <span class="salary">💰 ${j.salary}</span>
        <span class="posted-date">${j.posted}</span>
      </div>
    </div>
  `;
}

// ─────────────────────────────────────────────
// HOMEPAGE INIT
// ─────────────────────────────────────────────
function initHomepage() {
  // Featured churches
  const fc = document.getElementById('featuredChurches');
  if (fc) fc.innerHTML = churchesData.slice(0, 6).map(c => churchCardHTML(c)).join('');

  // Featured jobs
  const fj = document.getElementById('featuredJobs');
  if (fj) fj.innerHTML = jobsData.slice(0, 6).map(j => jobCardHTML(j)).join('');

  // Animated counters
  animateCounters();
}

// ─────────────────────────────────────────────
// PARTICLE CANVAS
// ─────────────────────────────────────────────
function initParticles() {
  const canvas = document.getElementById('particles-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  let W = canvas.width = window.innerWidth;
  let H = canvas.height = window.innerHeight;

  const particles = Array.from({ length: 60 }, () => ({
    x: Math.random() * W,
    y: Math.random() * H,
    r: Math.random() * 1.5 + 0.5,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.5 + 0.1,
  }));

  function draw() {
    ctx.clearRect(0, 0, W, H);
    particles.forEach(p => {
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(201,168,76,${p.alpha})`;
      ctx.fill();
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = W;
      if (p.x > W) p.x = 0;
      if (p.y < 0) p.y = H;
      if (p.y > H) p.y = 0;
    });
    // Draw connecting lines
    for (let i = 0; i < particles.length; i++) {
      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) {
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.strokeStyle = `rgba(201,168,76,${0.06 * (1 - dist / 120)})`;
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(draw);
  }
  draw();
  window.addEventListener('resize', () => {
    W = canvas.width = window.innerWidth;
    H = canvas.height = window.innerHeight;
  });
}

// ─────────────────────────────────────────────
// NAVBAR SCROLL
// ─────────────────────────────────────────────
function initNavbar() {
  const nav = document.getElementById('navbar');
  if (!nav) return;
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  });
}

function toggleNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// ─────────────────────────────────────────────
// MODALS
// ─────────────────────────────────────────────
function openModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal(id) {
  const el = document.getElementById(id);
  if (el) el.classList.remove('active');
  document.body.style.overflow = '';
}

// Close on backdrop click
document.addEventListener('click', e => {
  if (e.target.classList.contains('modal-overlay')) {
    e.target.classList.remove('active');
    document.body.style.overflow = '';
  }
});

// Close on Escape
document.addEventListener('keydown', e => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.active').forEach(m => {
      m.classList.remove('active');
    });
    document.body.style.overflow = '';
  }
});

// ─────────────────────────────────────────────
// TOAST NOTIFICATIONS
// ─────────────────────────────────────────────
function showToast(message, type = 'info') {
  const container = document.getElementById('toastContainer');
  if (!container) return;
  const icons = { success: '✅', error: '❌', info: 'ℹ️' };
  const toast = document.createElement('div');
  toast.className = `toast ${type}`;
  toast.innerHTML = `<span class="toast-icon">${icons[type]}</span><span class="toast-msg">${message}</span>`;
  container.appendChild(toast);
  setTimeout(() => {
    toast.style.opacity = '0';
    toast.style.transform = 'translateX(20px)';
    toast.style.transition = 'all 0.3s ease';
    setTimeout(() => toast.remove(), 300);
  }, 4000);
}

// ─────────────────────────────────────────────
// RESUME UPLOAD (Homepage)
// ─────────────────────────────────────────────
const mockMatches = [
  { title: 'Youth Pastor', church: 'North Point Community, GA', score: 94, tags: ['Youth Ministry', 'Discipleship', 'Teaching'] },
  { title: 'Children\'s Ministry Director', church: 'Saddleback Church, CA', score: 87, tags: ['Children\'s Ministry', 'Leadership', 'Curriculum'] },
  { title: 'Small Groups Pastor', church: 'New Life Church, CO', score: 81, tags: ['Community', 'Discipleship', 'Leadership'] },
  { title: 'Associate Pastor', church: 'Elevation Church, NC', score: 76, tags: ['Preaching', 'Pastoral Care', 'Teaching'] },
];

function handleResumeUpload(event) {
  const file = event.target.files[0];
  if (!file) return;
  const box = document.getElementById('uploadBox');
  const defaultView = document.getElementById('uploadDefault');
  const progressView = document.getElementById('uploadProgress');
  const fill = document.getElementById('progressFill');
  const pct = document.getElementById('progressPct');
  const title = document.getElementById('progressTitle');
  const step = document.getElementById('progressStep');

  defaultView.style.display = 'none';
  progressView.style.display = 'block';

  const steps = [
    { p: 15, t: 'Reading your resume...', s: 'Parsing document structure' },
    { p: 35, t: 'Extracting skills...', s: 'Identifying ministry experience' },
    { p: 55, t: 'Analyzing experience...', s: 'Processing theological background' },
    { p: 75, t: 'AI Matching...', s: 'Scanning 52,000+ church positions' },
    { p: 90, t: 'Ranking results...', s: 'Calculating compatibility scores' },
    { p: 100, t: '✅ Analysis Complete!', s: 'Showing your top matches' },
  ];

  let i = 0;
  const interval = setInterval(() => {
    if (i >= steps.length) {
      clearInterval(interval);
      setTimeout(showResults, 600);
      return;
    }
    fill.style.width = steps[i].p + '%';
    pct.textContent = steps[i].p + '%';
    title.textContent = steps[i].t;
    step.textContent = steps[i].s;
    i++;
  }, 600);
}

function showResults() {
  document.getElementById('uploadDefault').style.display = 'none';
  document.getElementById('uploadProgress').style.display = 'none';
  const resultsDiv = document.getElementById('jobResults');
  const matchCards = document.getElementById('matchCards');
  resultsDiv.style.display = 'block';
  matchCards.innerHTML = mockMatches.map(m => `
    <div class="job-match-card" onclick="window.location.href='jobs.html'">
      <div class="match-score" style="--pct:${m.score * 3.6}deg;">
        <span class="match-score-text">${m.score}%</span>
      </div>
      <div class="match-info">
        <h4>${m.title}</h4>
        <div class="church-name">⛪ ${m.church}</div>
        <div class="match-tags">
          ${m.tags.map(t => `<span class="match-tag">${t}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');
  showToast('🎉 Your resume was analyzed! 4 great matches found.', 'success');
}

function resetUpload() {
  document.getElementById('uploadDefault').style.display = 'block';
  document.getElementById('uploadProgress').style.display = 'none';
  document.getElementById('jobResults').style.display = 'none';
  document.getElementById('progressFill').style.width = '0%';
  document.getElementById('resumeInput').value = '';
}

// ─────────────────────────────────────────────
// DRAG & DROP
// ─────────────────────────────────────────────
function initDragDrop() {
  const box = document.getElementById('uploadBox');
  if (!box) return;
  ['dragenter', 'dragover'].forEach(e => box.addEventListener(e, ev => {
    ev.preventDefault();
    box.classList.add('drag-over');
  }));
  ['dragleave', 'drop'].forEach(e => box.addEventListener(e, ev => {
    ev.preventDefault();
    box.classList.remove('drag-over');
    if (e === 'drop' && ev.dataTransfer.files[0]) {
      handleResumeUpload({ target: { files: ev.dataTransfer.files } });
    }
  }));
}

// ─────────────────────────────────────────────
// COUNTER ANIMATION
// ─────────────────────────────────────────────
function animateCounters() {
  document.querySelectorAll('[data-target]').forEach(el => {
    const target = parseInt(el.getAttribute('data-target'));
    const suffix = el.closest('.hero-stat')?.querySelector('.label')?.textContent?.includes('%') ? '%' : (target >= 1000 ? '+' : '');
    let current = 0;
    const step = Math.ceil(target / 60);
    const timer = setInterval(() => {
      current = Math.min(current + step, target);
      el.textContent = current >= 1000 ? (current / 1000).toFixed(0) + 'K' : current;
      if (current === target) clearInterval(timer);
    }, 25);
  });
}

// ─────────────────────────────────────────────
// INTERSECTION OBSERVER (fade-up animations)
// ─────────────────────────────────────────────
function initScrollAnimations() {
  const obs = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        obs.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.fade-up').forEach(el => obs.observe(el));
}

// ─────────────────────────────────────────────
// EMAIL SUBSCRIPTION
// ─────────────────────────────────────────────
function subscribeEmail() {
  const input = document.getElementById('ctaEmail');
  if (!input) return;
  const email = input.value.trim();
  if (!email || !email.includes('@')) {
    showToast('Please enter a valid email address', 'error');
    return;
  }
  input.value = '';
  showToast('🎉 You\'re subscribed! Watch for ministry job alerts.', 'success');
}

// ─────────────────────────────────────────────
// INIT ON DOM READY
// ─────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  initNavbar();
  initScrollAnimations();
  initDragDrop();
  initHomepage();

  // Close mobile nav on link click
  document.querySelectorAll('.nav-links a').forEach(a => {
    a.addEventListener('click', () => {
      document.getElementById('navLinks')?.classList.remove('open');
    });
  });
});
