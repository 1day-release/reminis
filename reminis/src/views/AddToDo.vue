<template>
  <div class="l-container">
    <ModalHeader
      page-title = "やりたいことリストに追加"
      :path = "{name: 'Home'}"
    />
    <Main>
      <div class="wrap">
        <form action="">
          <ul class="list">
            <li
              v-for="(item, index) in dummy"
              :key="index"
            >
              <InputText
                :label="item.label"
                :placeholder="item.placeholder[random]"
              />
            </li>
            <li>
              <Label label="旅のカラー/イメージは？" />
              <Pallet />
              <PhotoImage :style="{ 'backgroundImage': 'url('+require('@/assets/images/_dummy_piece_bg01.jpg')+')' }" />
            </li>
          </ul>
          <ul class="action">
            <li>
              <Button
                style-class = "add"
                text = "やりたいことリストに追加する"
              />
            </li>
            <li>
              <Button
                style-class = "delete"
                text = "やりたいことリストから削除する"
              />
            </li>
          </ul>
        </form>
      </div>
    </Main>
  </div>
</template>

<script>
  import ModalHeader from '@/components/essentials/ModalHeader.vue'
  import Main from '@/components/essentials/Main.vue'

  import InputText from '@/components/form/InputText.vue'
  import Label from '@/components/form/Label.vue'
  import Pallet from '@/components/form/Pallet.vue'
  import PhotoImage from '@/components/form/PhotoImage.vue'
  import Button from '@/components/form/Button.vue'

  export default {
    name: 'AddToDo',
    components: {
      ModalHeader,
      Main,
      InputText,
      Label,
      Pallet,
      PhotoImage,
      Button,
    },
    data () {
      return {
        pageClass: "future",
        random: Math.floor( Math.random() * 5 ),
        dummy: [
          {
            label: '旅のテーマは？',
            placeholder: ['京都旅行', '美味しい魚を食べる', '綺麗な海を見に行く', 'ひとり旅', '大切な人と旅に出る',],
          },
          {
            label: '誰と？',
            placeholder: ['みんなで', '仲良しグループと', '同級生', 'ひとりで', 'あの人と！',],
          },
          {
            label: '何をする？',
            placeholder: ['お寺まわり', '美味しいもの探し', '泳ぐ', '自分探し', '思い出づくり',],
          },
          {
            label: 'どこで？',
            placeholder: ['京都・奈良付近', '北海道', '綺麗な海', 'どこへでも', '記念のあの場所',],
          },
          {
            label: 'いつ？',
            placeholder: ['暖かくなったら', '冬の間', '海開き後すぐ！', 'お金が貯まったら', '記念日',],
          },
        ]
      }
    },
    methods: {
    },
  }
</script>

<style scoped lang="scss">
  @import "@/assets/styles/functions.scss";

  .list {
    list-style-type: none;

    >li {
      margin: 20px 0 30px;
    }
  }

  .pallet {
    margin: inherit;
  }

  .action {
    list-style-type: none;
    margin: 60px 0;

    >li {
      margin-top: 20px;

      &:first-child {
        margin-top: 0;
      }
    }
  }
</style>
