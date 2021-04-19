import { v4 as uuidv4 } from 'uuid'

const chillHop = [
  {
    id: uuidv4(),
    name: 'Mirage',
    artist: "Nymano, j'san",
    cover:
      'https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg',
    color: ['#DFC8C5', '#2E3A84'],
    audio: 'https://mp3.chillhop.com/serve.php/?mp3=10132',
    active: true
  },
  {
    id: uuidv4(),
    name: 'Kinsfolk',
    artist: 'Aarigod',
    cover:
      'https://chillhop.com/wp-content/uploads/2021/02/7f102bdde417f6ead9a120b2b931449e5c12b4da-1024x1024.jpg',
    color: ['#A6BF62', '#10130A'],
    audio: 'https://mp3.chillhop.com/serve.php/?mp3=12996',
    active: false
  },
  {
    id: uuidv4(),
    name: 'Keep Going',
    artist: 'Swørn',
    cover:
      'https://chillhop.com/wp-content/uploads/2020/07/ff35dede32321a8aa0953809812941bcf8a6bd35-1024x1024.jpg',
    color: ['#CD607D', '#c94043'],
    audio: 'https://mp3.chillhop.com/serve.php/?mp3=9222',
    active: false
  },
  {
    id: uuidv4(),
    name: 'Lax Incense',
    artist: 'Mama Aiuto, Daphné',
    cover:
      'https://chillhop.com/wp-content/uploads/2021/01/6b1bb8736ee3e972747bc11f312e31cf7f5823e4-1024x1024.jpg',
    color: ['#AE8063', '#1F2F2C'],
    audio: 'https://mp3.chillhop.com/serve.php/?mp3=12123',
    active: false
  },
  {
    id: uuidv4(),
    name: 'Magenta Forever',
    artist: 'Aviino',
    cover:
      'https://chillhop.com/wp-content/uploads/2020/10/23fdd99adc3e16abcb67b004ea3e748ebf433a49-1024x1024.jpg',
    color: ['#5799DB', '#4C3C69'],
    audio: 'https://mp3.chillhop.com/serve.php/?mp3=10455',
    active: false
  },
  {
    id: uuidv4(),
    name: 'Toofpick',
    artist: 'Blue Wednesday, Shopan',
    cover:
      'https://chillhop.com/wp-content/uploads/2020/12/33a2a875828118a3ff260638a88362936104879a-1024x1024.jpg',
    color: ['#DFA6CF', '#392E54'],
    audio: 'https://mp3.chillhop.com/serve.php/?mp3=11226',
    active: false
  }
  //ADD MORE HERE
]

export default chillHop
