<template>
    <div class="modalProductBuy" @click.self="closeModal">
        <div class="modal-content">
            <svg @click.self="closeModal" class="close-modal" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z" fill="#1A233B"/>
            </svg>
            <div class="modal-header">
                <div class="modal-title">
                    Add to cart
                </div>
            </div>
            <div class="modal-text">
                You are going to add to cart next items
            </div>

        </div>
    </div>
</template>

<script setup>
import {useStore} from 'vuex'

const store = useStore()

const closeModal = () => {
    store.dispatch('closeModal', 'isOpenModalBuyProduct')
}
</script>

<style scoped lang="scss">
.modalProductBuy {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 99;
  background-color: rgba(#000, 0.8);
  display: flex;

  .modal-content {
    background-color: white;
    padding: 32px 40px 40px 40px;
    position: relative;
    border-radius: 24px;
    width: 394px;
    height: max-content;
    margin: 88px auto;

    .close-modal {
      position: absolute;
      right: 16px;
      top: 16px;
      width: 24px;
      height: 24px;
      cursor: pointer;
    }

    .modal-header {
      text-align: center;
      position: relative;

      .modal-title {
        color: #000;
        font-size: 20px;
        font-weight: 700;
        line-height: 28px;
      }
    }

    .modal-text {
      margin-top: 16px;
      text-align: center;
      font-size: 14px;
      line-height: 20px;
      color: #757983;
      font-weight: 500;
    }



  }

}

@media screen and (max-width: 768px) {
  .modalProductBuy {
    overflow-y: scroll;

    .modal-content {
      max-width: calc(100% - 48px);
      margin: 24px;
      padding-left: 24px;
      padding-right: 24px;
      border-radius: 20px;

      .close-modal {
        right: 12px;
        top: 12px;
      }

    }

  }
}

</style>