const rockData = [
  {
    name: 'Granite',
    category: 'Igneous',
    description:
      'Granite is a coarse-grained intrusive igneous rock formed from slow cooling of magma deep beneath the Earth’s surface. It is widely used in construction and monuments because of its strength, durability, and attractive appearance.',
    mineralogy: 'Quartz, feldspar, mica',
    color: 'Light gray, pink, white',
    texture: 'Coarse-grained',
    density: '2.6–2.8 g/cm³',
    hardness: '6–7 Mohs',
    porosity: 'Low',
    commonUses: ['Countertops', 'Building stone', 'Kerbs', 'Monuments'],
    images: [
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    name: 'Basalt',
    category: 'Igneous',
    description:
      'Basalt is a fine-grained mafic volcanic rock that forms from rapidly cooled lava. It is dense, dark in colour and commonly found in lava flows and oceanic crust.',
    mineralogy: 'Pyroxene, plagioclase, olivine',
    color: 'Dark gray to black',
    texture: 'Fine-grained',
    density: '2.8–3.0 g/cm³',
    hardness: '5–6 Mohs',
    porosity: 'Very low',
    commonUses: ['Road aggregate', 'Rail ballast', 'Dimension stone', 'Basalt fibre'],
    images: [
      'https://images.unsplash.com/photo-1613324205360-0e6c4b3c0f7b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    name: 'Sandstone',
    category: 'Sedimentary',
    description:
      'Sandstone is composed mainly of sand-sized quartz grains cemented together. It is common in sedimentary basins and often used in masonry, paving, and building facades.',
    mineralogy: 'Quartz, feldspar, clay matrix',
    color: 'Buff, red, brown, yellow',
    texture: 'Medium-grained, granular',
    density: '2.2–2.6 g/cm³',
    hardness: '6–7 Mohs',
    porosity: 'Moderate',
    commonUses: ['Building stone', 'Sand filter media', 'Paving', 'Cladding'],
    images: [
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    name: 'Limestone',
    category: 'Sedimentary',
    description:
      'Limestone is a sedimentary rock mainly composed of calcium carbonate. It commonly forms in marine environments and is widely used in cement manufacture and building materials.',
    mineralogy: 'Calcite, shell fragments, clay',
    color: 'White, gray, beige',
    texture: 'Fine to medium-grained',
    density: '2.3–2.7 g/cm³',
    hardness: '3–4 Mohs',
    porosity: 'Moderate to high',
    commonUses: ['Cement production', 'Lime', 'Aggregates', 'Dimension stone'],
    images: [
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500375592092-40eb2168fd21?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    name: 'Mudstone',
    category: 'Sedimentary',
    description:
      'Mudstone is a fine-grained sedimentary rock formed from compacted silt and clay. It often occurs in low-energy depositional environments and may split into thin layers depending on composition and bedding.',
    mineralogy: 'Clay minerals, quartz, silt',
    color: 'Gray, brown, red, green',
    texture: 'Very fine-grained',
    density: '2.1–2.6 g/cm³',
    hardness: '2–3 Mohs',
    porosity: 'Moderate to high',
    commonUses: ['Shale gas source rock', 'Ceramic raw material', 'Fill material', 'Foundations'],
    images: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1473448912268-2022ce9509d8?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    name: 'Marble',
    category: 'Metamorphic',
    description:
      'Marble is a metamorphosed limestone or dolostone, typically recrystallized into interlocking calcite grains. It is valued for its elegance and is commonly used in decorative stonework.',
    mineralogy: 'Calcite, dolomite',
    color: 'White, gray, pink, green',
    texture: 'Medium to coarse-grained, crystalline',
    density: '2.6–2.8 g/cm³',
    hardness: '3–5 Mohs',
    porosity: 'Low',
    commonUses: ['Floor tiles', 'Sculpture', 'Facade panels', 'Countertops'],
    images: [
      'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    name: 'Slate',
    category: 'Metamorphic',
    description:
      'Slate is a low-grade metamorphic rock derived from shale. It characteristically splits into thin, durable sheets, making it useful for roofing and paving.',
    mineralogy: 'Clay minerals, mica, quartz',
    color: 'Gray, black, green, purple',
    texture: 'Foliated, fine-grained',
    density: '2.7–2.9 g/cm³',
    hardness: '3–4 Mohs',
    porosity: 'Low',
    commonUses: ['Roofing', 'Flooring', 'Blackboards', 'Cladding'],
    images: [
      'https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=900&q=80'
    ]
  },
  {
    name: 'Quartzite',
    category: 'Metamorphic',
    description:
      'Quartzite forms when sandstone is strongly metamorphosed, producing a dense, hard, and durable rock rich in quartz. It is highly resistant to weathering and abrasion.',
    mineralogy: 'Quartz',
    color: 'White, gray, pink, red',
    texture: 'Granular, crystalline',
    density: '2.6–2.7 g/cm³',
    hardness: '7 Mohs',
    porosity: 'Very low',
    commonUses: ['Dimension stone', 'Aggregate', 'Rail ballast', 'Decorative stone'],
    images: [
      'https://images.unsplash.com/photo-1511497584788-876760111969?auto=format&fit=crop&w=900&q=80',
      'https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=900&q=80'
    ]
  }
];

const rockMap = new Map(rockData.map((rock) => [rock.name.toLowerCase(), rock]));
const rockList = document.getElementById('rockList');
const rockSearch = document.getElementById('rockSearch');
const viewBtn = document.getElementById('viewBtn');
const result = document.getElementById('result');

function populateDatalist() {
  rockData.forEach((rock) => {
    const option = document.createElement('option');
    option.value = rock.name;
    rockList.appendChild(option);
  });
}

function renderRock(rock) {
  result.innerHTML = `
    <article class="rock-card">
      <div class="rock-header">
        <img class="rock-photo" src="${rock.images[0]}" alt="${rock.name} sample" />
        <div>
          <div class="rock-tag">${rock.category}</div>
          <h2 class="rock-title">${rock.name}</h2>
          <p class="rock-description">${rock.description}</p>
        </div>
      </div>

      <div class="detail-grid">
        <div class="metric"><span class="label">Mineralogy</span><strong>${rock.mineralogy}</strong></div>
        <div class="metric"><span class="label">Colour</span><strong>${rock.color}</strong></div>
        <div class="metric"><span class="label">Texture</span><strong>${rock.texture}</strong></div>
        <div class="metric"><span class="label">Density</span><strong>${rock.density}</strong></div>
        <div class="metric"><span class="label">Hardness</span><strong>${rock.hardness}</strong></div>
        <div class="metric"><span class="label">Porosity</span><strong>${rock.porosity}</strong></div>
      </div>

      <div class="info-grid">
        <div class="info-card">
          <h3>Typical uses</h3>
          <ul>
            ${rock.commonUses.map((item) => `<li>${item}</li>`).join('')}
          </ul>
        </div>
        <div class="info-card">
          <h3>Key notes</h3>
          <ul>
            <li>Commonly associated with ${rock.category.toLowerCase()} geology.</li>
            <li>Useful in construction, landscaping, or aggregate applications depending on durability.</li>
            <li>Rock properties vary with weathering, bedding, and local formation conditions.</li>
          </ul>
        </div>
      </div>

      <div>
        <h3 class="photo-heading">Rock photos</h3>
        <div class="photo-grid">
          ${rock.images
            .map(
              (image) => `
                <img src="${image}" alt="${rock.name} photo" />
              `
            )
            .join('')}
        </div>
      </div>
    </article>
  `;
}

function getSelectedRock() {
  const query = rockSearch.value.trim();
  if (!query) {
    return null;
  }
  return rockMap.get(query.toLowerCase()) || null;
}

function handleView() {
  const rock = getSelectedRock();
  if (!rock) {
    result.innerHTML = '<div class="empty-state">No matching rock type found. Please choose from the search list.</div>';
    return;
  }

  renderRock(rock);
}

rockSearch.addEventListener('keydown', (event) => {
  if (event.key === 'Enter') {
    handleView();
  }
});

viewBtn.addEventListener('click', handleView);

populateDatalist();
const defaultRock = rockData[0];
rockSearch.value = defaultRock.name;
renderRock(defaultRock);
