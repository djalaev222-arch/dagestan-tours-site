function cover(id) {
  return `https://picsum.photos/seed/${id}/900/700`
}

export const tours = [
  {
    id: 'sulak-canyon-2d',
    title: 'Сулакский каньон и Чиркейское водохранилище',
    region: 'Сулакский каньон',
    type: 'nature',
    difficulty: 'easy',
    nights: 1,
    days: 2,
    priceFrom: 8900,
    rating: 4.9,
    reviewsCount: 63,
    groupSize: '4-12 человек',
    departureCity: 'Махачкала',
    cover: cover('sulak-canyon-2d'),
    gallery: [cover('sulak-canyon-2d'), cover('sulak-canyon-2d-alt')],
    shortDescription:
      'Смотровая площадка над самым глубоким каньоном Европы, лодка по бирюзовой воде Чиркейского водохранилища, обед в горном ауле.',
    included: [
      'Трансфер на внедорожнике из Махачкалы',
      'Гид-проводник из Дубков',
      'Прогулка на катере по каньону',
      'Обед с местной кухней (чуду, хинкал)',
      'Ночёвка на гостевом дворе'
    ],
    excluded: ['Личные расходы', 'Страховка', 'Алкогольные напитки'],
    program: [
      { day: 1, title: 'Каньон и водохранилище', details: 'Выезд из Махачкалы, смотровая площадка Сулакского каньона, прогулка на катере, размещение на гостевом дворе.' },
      { day: 2, title: 'Бархан Сарыкум', details: 'Утренний выезд к бархану Сарыкум, возвращение в Махачкалу к обеду.' }
    ]
  },
  {
    id: 'gunib-plateau-3d',
    title: 'Гуниб и крепость Шамиля',
    region: 'Гуниб',
    type: 'history',
    difficulty: 'medium',
    nights: 2,
    days: 3,
    priceFrom: 15400,
    rating: 5.0,
    reviewsCount: 41,
    groupSize: '4-10 человек',
    departureCity: 'Махачкала',
    cover: cover('gunib-plateau-3d'),
    gallery: [cover('gunib-plateau-3d'), cover('gunib-plateau-3d-alt')],
    shortDescription:
      'Плато Гуниб, место последнего боя имама Шамиля, руины крепости и панорама на весь Гунибский район.',
    included: ['Трансфер на внедорожнике', 'Гид-историк', 'Проживание 2 ночи', 'Завтраки', 'Вход на территорию крепости'],
    excluded: ['Обеды и ужины', 'Личные расходы'],
    program: [
      { day: 1, title: 'Дорога в горы', details: 'Выезд из Махачкалы через Буйнакский перевал, обзорные точки, заселение.' },
      { day: 2, title: 'Крепость и плато', details: 'Пешая прогулка по плато Гуниб, крепость, музей имама Шамиля.' },
      { day: 3, title: 'Возвращение', details: 'Свободное утро, выезд в Махачкалу.' }
    ]
  },
  {
    id: 'derbent-old-city-2d',
    title: 'Дербент: Нарын-кала и старый город',
    region: 'Дербент',
    type: 'history',
    difficulty: 'easy',
    nights: 1,
    days: 2,
    priceFrom: 9800,
    rating: 4.8,
    reviewsCount: 87,
    groupSize: '2-14 человек',
    departureCity: 'Махачкала',
    cover: cover('derbent-old-city-2d'),
    gallery: [cover('derbent-old-city-2d'), cover('derbent-old-city-2d-alt')],
    shortDescription:
      'Крепость Нарын-кала, узкие улочки старого города, ковровая мануфактура и дегустация дербентского коньяка.',
    included: ['Трансфер', 'Гид по старому городу', 'Вход в крепость Нарын-кала', 'Дегустация', 'Проживание 1 ночь'],
    excluded: ['Питание, кроме дегустации', 'Личные расходы'],
    program: [
      { day: 1, title: 'Крепость и цитадель', details: 'Нарын-кала, крепостные стены, магал старого города.' },
      { day: 2, title: 'Мастерские и рынок', details: 'Ковровая мануфактура, дегустация, свободное время на рынке.' }
    ]
  },
  {
    id: 'khunzakh-waterfalls-2d',
    title: 'Хунзахские водопады и Аварское плато',
    region: 'Хунзах',
    type: 'nature',
    difficulty: 'medium',
    nights: 1,
    days: 2,
    priceFrom: 11200,
    rating: 4.9,
    reviewsCount: 34,
    groupSize: '4-10 человек',
    departureCity: 'Махачкала',
    cover: cover('khunzakh-waterfalls-2d'),
    gallery: [cover('khunzakh-waterfalls-2d')],
    shortDescription:
      'Водопад Тобот высотой 70 метров, каньон реки Тобот, аварское село Хунзах и вид на плато с обрыва.',
    included: ['Трансфер на внедорожнике', 'Гид-проводник', 'Обед', 'Проживание на гостевом дворе'],
    excluded: ['Личные расходы', 'Страховка'],
    program: [
      { day: 1, title: 'Плато и водопад', details: 'Выезд из Махачкалы, смотровая площадка над каньоном, водопад Тобот.' },
      { day: 2, title: 'Хунзахская крепость', details: 'Осмотр крепости, возвращение в Махачкалу.' }
    ]
  },
  {
    id: 'sarykum-dune-1d',
    title: 'Бархан Сарыкум за один день',
    region: 'Сарыкум',
    type: 'nature',
    difficulty: 'easy',
    nights: 0,
    days: 1,
    priceFrom: 4500,
    rating: 4.7,
    reviewsCount: 52,
    groupSize: '2-16 человек',
    departureCity: 'Махачкала',
    cover: cover('sarykum-dune-1d'),
    gallery: [cover('sarykum-dune-1d')],
    shortDescription: 'Крупнейший бархан Европы среди заповедной степи, подъём на гребень и вид на хребет Нарат-Тюбе.',
    included: ['Трансфер туда-обратно', 'Гид', 'Вход в заповедник'],
    excluded: ['Питание', 'Личные расходы'],
    program: [{ day: 1, title: 'Бархан Сарыкум', details: 'Выезд утром, подъём на бархан, возвращение вечером.' }]
  },
  {
    id: 'shalbuzdag-trek-4d',
    title: 'Треккинг на Шалбуздаг',
    region: 'Южный Дагестан',
    type: 'trekking',
    difficulty: 'hard',
    nights: 3,
    days: 4,
    priceFrom: 24900,
    rating: 5.0,
    reviewsCount: 19,
    groupSize: '4-8 человек',
    departureCity: 'Дербент',
    cover: cover('shalbuzdag-trek-4d'),
    gallery: [cover('shalbuzdag-trek-4d')],
    shortDescription:
      'Многодневный поход к священной горе Шалбуздаг (4142 м), ночёвки в палатках, восхождение на рассвете.',
    included: ['Гид-инструктор', 'Групповое снаряжение', 'Питание на маршруте', 'Трансфер от Дербента'],
    excluded: ['Личное снаряжение', 'Страховка от несчастного случая'],
    program: [
      { day: 1, title: 'Заброска и акклиматизация', details: 'Переезд в базовый лагерь, короткий акклиматизационный выход.' },
      { day: 2, title: 'Подход под гору', details: 'Переход к высотному лагерю.' },
      { day: 3, title: 'Восхождение', details: 'Выход на рассвете, восхождение на вершину, спуск.' },
      { day: 4, title: 'Возвращение', details: 'Спуск в долину, трансфер в Дербент.' }
    ]
  },
  {
    id: 'caspian-coast-3d',
    title: 'Каспийское побережье: пляж и рыбный рынок',
    region: 'Каспийск — Дербент',
    type: 'beach',
    difficulty: 'easy',
    nights: 2,
    days: 3,
    priceFrom: 13600,
    rating: 4.6,
    reviewsCount: 28,
    groupSize: '2-12 человек',
    departureCity: 'Махачкала',
    cover: cover('caspian-coast-3d'),
    gallery: [cover('caspian-coast-3d')],
    shortDescription: 'Спокойный отдых на побережье Каспия, рыбный рынок в Избербаше, вечер в Дербенте.',
    included: ['Проживание 2 ночи', 'Завтраки', 'Трансфер вдоль побережья'],
    excluded: ['Обеды и ужины', 'Личные расходы'],
    program: [
      { day: 1, title: 'Побережье Каспийска', details: 'Заселение, пляж, вечерняя набережная.' },
      { day: 2, title: 'Избербаш и рыбный рынок', details: 'Рыбный рынок, дегустация, переезд в Дербент.' },
      { day: 3, title: 'Дербент и возвращение', details: 'Прогулка по старому городу, выезд в Махачкалу.' }
    ]
  },
  {
    id: 'irganai-lake-1d',
    title: 'Ирганайское водохранилище и смотровые точки трассы',
    region: 'Ирганай',
    type: 'nature',
    difficulty: 'easy',
    nights: 0,
    days: 1,
    priceFrom: 5200,
    rating: 4.7,
    reviewsCount: 22,
    groupSize: '2-14 человек',
    departureCity: 'Махачкала',
    cover: cover('irganai-lake-1d'),
    gallery: [cover('irganai-lake-1d')],
    shortDescription: 'Однодневная поездка на бирюзовое Ирганайское водохранилище с остановками на смотровых площадках.',
    included: ['Трансфер', 'Гид', 'Обед в кафе на трассе'],
    excluded: ['Личные расходы'],
    program: [{ day: 1, title: 'Ирганай', details: 'Выезд утром, смотровые точки, водохранилище, возвращение вечером.' }]
  }
]

export function getTourById(id) {
  return tours.find((tour) => tour.id === id) ?? null
}
