const currentTimeElement = document.getElementById('currentTime');
const performanceSchedule = document.getElementById('performanceSchedule');
const rehearsalSchedule = document.getElementById('rehearsalSchedule');
const ensembleTracker = document.getElementById('ensembleTracker');
const recitalSchedule = document.getElementById('recitalSchedule');
const masterclassDetails = document.getElementById('masterclassDetails');
const studentSpotlight = document.getElementById('studentSpotlight');

const performances = [
  {
    title: 'Faculty Chamber Recital',
    repertoire: 'Schubert, Barber, Piazzolla',
    time: '11:00 AM',
    location: 'Recital Hall A',
    image: 'assets/icon-performance.svg'
  },
  {
    title: 'Piano Seminar Showcase',
    repertoire: 'Debussy, Chopin, Ligeti',
    time: '1:30 PM',
    location: 'Studio 3',
    image: 'assets/icon-performance.svg'
  },
  {
    title: 'Jazz Ensemble Spotlight',
    repertoire: 'Coltrane, Davis, Original Works',
    time: '5:00 PM',
    location: 'Black Box Theater',
    image: 'assets/icon-performance.svg'
  }
];

const rehearsals = [
  {
    ensemble: 'Symphonic Orchestra',
    coach: 'Maestro Kline',
    time: '9:00 AM - 11:00 AM',
    room: 'Concert Hall Rehearsal Studio',
    image: 'assets/icon-rehearsal.svg'
  },
  {
    ensemble: 'Vocal Chamber Choir',
    coach: 'Dr. Noor',
    time: '2:00 PM - 4:00 PM',
    room: 'Choir Loft'
  },
  {
    ensemble: 'Wind Quintet',
    coach: 'Prof. Alvarez',
    time: '4:30 PM - 6:00 PM',
    room: 'Practice Room 7'
  }
];

const ensembleRehearsals = [
  {
    name: 'String Ensemble',
    focus: 'Brahms, Barber & chamber balance',
    coach: 'Maestro Kline',
    time: '10:00 AM - 11:15 AM',
    room: 'Studio 4',
    image: 'assets/icon-ensemble.svg'
  },
  {
    name: 'Vocal Chorus',
    focus: 'Blend, tuning, and diction',
    coach: 'Dr. Noor',
    time: '1:00 PM - 2:30 PM',
    room: 'Choir Loft'
  },
  {
    name: 'Contemporary Ensemble',
    focus: 'New works & rhythmic precision',
    coach: 'Prof. Alvarez',
    time: '3:00 PM - 4:15 PM',
    room: 'Practice Room 8'
  }
];

const recitals = [
  {
    title: 'Senior Piano Recital',
    repertoire: 'Beethoven, Liszt, Ravel',
    date: 'June 22 • 6:30 PM',
    location: 'Concert Hall',
    image: 'assets/icon-recital.svg'
  },
  {
    title: 'String Quartet Premiere',
    repertoire: 'Bartók, Mendelssohn',
    date: 'June 24 • 8:00 PM',
    location: 'Chamber Hall'
  },
  {
    title: 'Contemporary Voice Showcase',
    repertoire: 'New works from student composers',
    date: 'June 28 • 7:00 PM',
    location: 'Recital Studio B'
  }
];

const masterclasses = [
  {
    instructor: 'Prof. Alvarez',
    focus: 'Piano Articulation & Tone',
    date: 'Wednesday • 4:00 PM',
    location: 'Piano Studio 2',
    image: 'assets/icon-masterclass.svg'
  },
  {
    instructor: 'Maestro Kline',
    focus: 'Orchestral Leadership',
    date: 'Thursday • 10:30 AM',
    location: 'Symphony Hall'
  },
  {
    instructor: 'Dr. Noor',
    focus: 'Choral Blend & Diction',
    date: 'Friday • 1:00 PM',
    location: 'Choir Loft'
  }
];

const studentSpotlights = [
  {
    name: 'Lina Park',
    program: 'Classical Violin Performance',
    achievement: 'Featured soloist in this week’s faculty concert',
    highlight: 'Exceptional phrasing and ensemble leadership',
    nextEvent: 'String Ensemble Recital • June 22',
    image: 'assets/student-lina.svg'
  },
  {
    name: 'Noah Bridges',
    program: 'Jazz Piano & Composition',
    achievement: 'Winner of the Spring Improvisation Competition',
    highlight: 'Creative harmonic textures with a lyrical touch',
    nextEvent: 'Jazz Ensemble Showcase • June 24',
    image: 'assets/student-noah.svg'
  },
  {
    name: 'Mina Castillo',
    program: 'Choral Conducting',
    achievement: 'Chorus captain and rehearsal mentor',
    highlight: 'Outstanding vocal blend and stage presence',
    nextEvent: 'Choral Showcase • June 28',
    image: 'assets/student-mina.svg'
  }
];

function renderSchedule(items, container, type) {
  container.innerHTML = items.map(item => {
    const image = item.image ? `
      <div class="item-pic">
        <img src="${item.image}" alt="" />
      </div>
    ` : '';

    if (type === 'performance') {
      return `
      <li class="schedule-item">
        ${image}
        <div>
          <strong>${item.title}</strong>
          <div>${item.repertoire}</div>
        </div>
        <time>${item.time}</time>
      </li>`;
    }

    return `
      <li class="schedule-item">
        ${image}
        <div>
          <strong>${item.ensemble}</strong>
          <div>${item.room}</div>
        </div>
        <time>${item.time}</time>
      </li>`;
  }).join('');
}

function renderEnsembleTracker(items, container) {
  container.innerHTML = items.map(item => `
    <li class="schedule-item">
      <div class="item-pic">
        <img src="${item.image}" alt="${item.name}" />
      </div>
      <div>
        <strong>${item.name}</strong>
        <div>${item.focus}</div>
        <div class="schedule-meta">${item.coach} · ${item.room}</div>
      </div>
      <time>${item.time}</time>
    </li>`;
  }).join('');
}

function renderMasterclasses(items, container) {
  container.innerHTML = items.map(item => `
    <li class="schedule-item">
      <div class="item-pic">
        <img src="${item.image}" alt="${item.instructor}" />
      </div>
      <div>
        <strong>${item.instructor}</strong>
        <div>${item.focus}</div>
      </div>
      <time>${item.date}</time>
    </li>
  `).join('');
}

function renderStudentSpotlight(items, container) {
  container.innerHTML = items.map(item => `
    <li class="schedule-item spotlight-item">
      <div class="avatar-wrap">
        <img class="profile-avatar" src="${item.image}" alt="${item.name}" />
      </div>
      <div>
        <strong>${item.name}</strong>
        <div>${item.program}</div>
        <div class="schedule-meta">${item.achievement}</div>
        <div class="schedule-meta">${item.highlight}</div>
      </div>
      <time>${item.nextEvent}</time>
    </li>
  `).join('');
}

function updateClock() {
  const now = new Date();
  const options = { weekday: 'long', month: 'long', day: 'numeric', hour: 'numeric', minute: '2-digit' };
  currentTimeElement.textContent = now.toLocaleString('en-US', options);
}

window.addEventListener('load', () => {
  renderSchedule(performances, performanceSchedule, 'performance');
  renderSchedule(rehearsals, rehearsalSchedule, 'rehearsal');
  renderEnsembleTracker(ensembleRehearsals, ensembleTracker);
  renderSchedule(recitals, recitalSchedule, 'performance');
  renderMasterclasses(masterclasses, masterclassDetails);
  renderStudentSpotlight(studentSpotlights, studentSpotlight);
  updateClock();
  setInterval(updateClock, 30000);
});
