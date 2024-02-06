<template>
    <div class="modalDoc" @click.self="closeModal">
        <div class="modal-content">
            <svg @click.self="closeModal" class="close-modal" width="24" height="24" viewBox="0 0 24 24" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path d="M6.4 19L5 17.6L10.6 12L5 6.4L6.4 5L12 10.6L17.6 5L19 6.4L13.4 12L19 17.6L17.6 19L12 13.4L6.4 19Z"
                      fill="#1A233B"/>
            </svg>
            <div class="modal-header">
                <div class="modal-title">
                    Cookie Policy Company Name
                </div>
            </div>
            <div class="modal-text">
                <h6><b>1. ABOUT THIS COOKIE POLICY</b></h6>
                <p>
                    To enhance the quality of Our Services and provide You with relevant content We use
                    technologies, such as Cookies. This Cookies policy will explain in more detail why and how We
                    use Cookies as well as the information inside them. If You need more information on how we
                    protect Your personal data, please read through Our Privacy Policy.
                    By default, We prefer to use other technical solutions to enable You to access Our Website and
                    enjoy its functionality. However, if Your personal device settings or browser settings don’t
                    allow local storage of some information mentioned herein below, We can only use Cookies to
                    provide you with access to the content on Our Website.

                </p>
                <h6>2. WHAT ARE COOKIES?</h6>
                <p>
                    Cookies are text files which contain small amounts of information being sent to and stored on
                    Your computer, smartphone or other device when You access Our Website.
                    Cookies do not typically contain any information that personally identifies you, but personal
                    information that We store about You may be linked to the information stored in and obtained from
                    Cookies.

                </p>
                <h6>3. WHAT COOKIES DO WE USE AND HOW WE USE THEM?</h6>
                <p>
                    Strictly Necessary Cookies - these are required for the operation of Our Website. They include:
                    these are required for the operation of Our Website. They include User session key, settings,
                    promotional code. This is a temporary key issued to the User after the successful logging in.
                    These cookies are used to enable You to log into secure areas of Our Website.
                </p>
                <h6>4. HOW DO YOU CHANGE COOKIE PREFERENCES OR BLOCK COOKIES?</h6>
                <p>
                    If You want to delete any cookies already stored on Your personal device or stop the cookies,
                    You can do so by deleting Your existing cookies and/or altering Your browser's privacy settings.
                    However, if, as mentioned above, due to Your personal device settings or browser settings, We
                    are not able to use other technical solutions to store respective information,
                    restriction/deletion of cookies may lead to your inability to access the content of Our Website.
                </p>
                <h6>5. CHANGES TO THE COOKIE POLICY</h6>
                <p>
                    We may update this Policy from time to time. If We make significant changes, We will let You
                    know but please regularly check this Policy to ensure You are aware of the most updated version.
                </p>
                <h6>CONTACT</h6>
                <p>
                    Questions, comments and requests regarding this Cookie Policy should be addressed to
                    info@gamingonlinestore.com
                </p>

            </div>
        </div>

    </div>
</template>

<script setup>
import {useStore} from 'vuex'

const store = useStore()

const closeModal = () => {
    store.dispatch('closeModal', 'isOpenModalCookiePolicy')
}
</script>

<style scoped lang="scss">
.modalDoc {
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
    width: 100%;
    max-width: 70vw;
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
      text-align: left;
      font-size: 14px;
      line-height: 20px;
      color: #757983;
      font-weight: 500;
      overflow-y: scroll;
      max-height: calc(100vh - 300px);
      padding-right: 12px;

      &::-webkit-scrollbar {
        width: 4px;
      }

      &::-webkit-scrollbar-track {
        background-color: #E3E5EA;
      }

      &::-webkit-scrollbar-thumb {
        background-color: var(--main-color);

      }

      h6 {
        font-size: 20px;
        line-height: 28px;
      }
    }


  }

}

@media screen and (max-width: 768px) {
  .modalDoc {
    overflow-y: scroll;

      .modal-header {
          margin-top: 24px;

          .modal-title {
              min-height: 56px;
          }
      }

    .modal-content {
      max-width: calc(100% - 48px);
      height: calc(100% - 48px);
      margin: 24px;
      padding-left: 24px;
      padding-right: 24px;
      border-radius: 20px;

        .modal-text {
            max-height: calc(100% - 70px);
        }

      .close-modal {
        right: 12px;
        top: 12px;
      }

    }

  }
}

</style>