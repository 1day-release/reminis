<template>
  <div class="l-container">
    <Header
      page-title = "やりたいことリスト"
      :page-class = "pageClass"
    />
    <Main>
      <ul class="list">
        <li
          v-for="(AAA, index) in dummy"
          :key="index"
        >
          <Piece
            :path = "{name: ''}"
            :theme = "AAA.theme"
            :who   = "AAA.who"
            :what  = "AAA.what"
            :where = "AAA.where"
            :when  = "AAA.when"
            :color-class = "AAA.color"
            :style = "setBackgroundImage(AAA.image)"
          />
        </li>
      </ul>
    </Main>
    <Footer
      :page-class = "pageClass"
    />
  </div>
</template>

<script>
  import Header from '@/components/essentials/Header.vue'
  import Main from '@/components/essentials/Main.vue'
  import Footer from '@/components/essentials/Footer.vue'

  import Piece from '@/components/common/Piece.vue'

  export default {
    name: 'Home',
    components: {
      Header,
      Main,
      Footer,
      Piece,
    },
    data () {
      return {
        pageClass: "future",
        dummy: [
          {
            theme: '京都旅行',
            who:   'みんなで',
            what:  'お寺まわり',
            where: '京都・奈良付近',
            when:  '暖かくなったら',
            color: '',
            image: '_dummy_piece_bg01.jpg',
          },
          {
            theme: 'みんなでスノボ',
            who:   'みんなで',
            what:  'スノボ',
            where: '',
            when:  '2月ごろ',
            color: 'blue',
            image: '',
          },
          {
            theme: 'トロピカルリゾートを満喫',
            who:   '',
            what:  '海で遊ぶ',
            where: 'タイ プーケット',
            when:  '11月～3月',
            color: '',
            image: '_dummy_piece_bg03.jpg',
          },
          {
            theme: '上海料理を食べ尽くす',
            who:   '一人',
            what:  '上海料理を食べる',
            where: '上海市内',
            when:  '年明け',
            color: '',
            image: '_dummy_piece_bg04.jpg',
          },
          {
            theme: '関西に行きたい！',
            who:   '',
            what:  '',
            where: '',
            when:  '',
            color: 'red',
            image: '',
          },
          {
            theme: '美味しいうどんを食べる',
            who:   '',
            what:  'うどんを食べる',
            where: '四国・高知',
            when:  '',
            color: 'yellow',
            image: '',
          },
          {
            theme: 'BBQするぞ〜',
            who:   '同級生',
            what:  '肉を食う',
            where: '埼玉県',
            when:  '夏',
            color: 'green',
            image: '',
          },
          {
            theme: '白川郷へ行く',
            who:   '',
            what:  '',
            where: '岐阜県・白川郷',
            when:  '冬',
            color: 'purple',
            image: '',
          },
          {
            theme: '自分探しの旅に出る',
            who:   'ひとり',
            what:  '',
            where: '',
            when:  'どこへでも',
            color: 'black',
            image: '',
          },
        ]
      }
    },
    methods: {
      setBackgroundImage (image) {
        if(image) {
          return [{ 'backgroundImage': 'url('+require('@/assets/images/'+image)+')' }]
        } else {
          return []
        }
      },
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .list {
    list-style-type: none;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    grid-auto-flow: row;
    grid-column-gap: 15px;
    grid-row-gap:    15px;
    margin: 20px 15px;

    >li {
      position: relative;
      padding-top: 180px / 160px * 100%;
    }

    .piece {
      position: absolute;
      top: 0;
      left: 0;
    }
  }
</style>
