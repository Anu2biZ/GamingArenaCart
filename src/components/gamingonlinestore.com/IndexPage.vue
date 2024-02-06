<template>
    <Header :active-item="currentRoute"></Header>
    <ProductBuy v-if="isOpenModalBuyProduct"></ProductBuy>
    <PrivacyPolicy v-if="isOpenModalPrivacyPolicy"></PrivacyPolicy>
    <CookiePolicy v-if="isOpenModalCookiePolicy"></CookiePolicy>
    <TermsConditions v-if="isOpenModalTerms"></TermsConditions>


    <div class="intro">
        <div class="intro-text">
            Top up games, platforms, purchase <span>vouchers</span>
        </div>
        <img src="../../assets/images/gamingonlinestore/rocket.png" alt="">
    </div>

    <h1 class="title store">Online Store</h1>

    <div class="catalog">
        <div class="product-block">
            <div class="category">
                <div class="category-name">Категория</div>
            </div>
            <div class="products">

                <div class="product">
                    <img src="">
                    <div class="product-name">Название товара</div>
                    <div class="product-price">Price: $12.22</div>
                    <button class="product-buy" @click="openProductBuy">
                        Add to cart
                    </button>
                    <div class="product-more">More info</div>
                </div>
            </div>
        </div>
    </div>

    <div class="reviews">
        <h1 class="title reviews">Reviews</h1>
        <swiper
                class="reviews-slider"
                :modules="modules"
                :breakpoints="{
                320: {
                    slidesPerView: 1
                },
                730: {
                    slidesPerView: 3
                }
            }"
                :space-between="16"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
                :autoplay="{delay: 3500}"
        >
            <swiper-slide>
                <div class="review-name">Kamil E.</div>
                <div class="review-text">I wish there were more games. and so everything is cool, thank you</div>
            </swiper-slide>
            <swiper-slide>
                <div class="review-name">Jason L.</div>
                <div class="review-text">I regularly use this service, there were no problems, the voucher came
                    instantly
                    and was activated without any problems
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="review-name">Michael R.</div>
                <div class="review-text">I would like to see more variations for replenishing games, but otherwise
                    everything is cool!
                </div>
            </swiper-slide>
            <swiper-slide>
                <div class="review-name">Emma W.</div>
                <div class="review-text">I've been dreaming of buying Spider-Man for a long time, thank you!</div>
            </swiper-slide>
            <swiper-slide>
                <div class="review-name">Edgar D.</div>
                <div class="review-text">Thanks for your service, it's convenient</div>
            </swiper-slide>
            <swiper-slide>
                <div class="review-name">Sofie R.</div>
                <div class="review-text">Quick replenishment of the balance, thank you</div>
            </swiper-slide>

        </swiper>
    </div>
    <div class="faq">
        <div class="title">FAQ</div>
        <div class="faq-block">
            <div class="faq-block-item">
                <div class="faq-header">
                    <span>Account Requirements</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 28 17"
                         fill="none">
                        <path d="M13.8112 11.7386L3.756 1.68156C3.75588 1.68144 3.75577 1.68133 3.75566 1.68122C3.59898 1.52423 3.41288 1.39966 3.20801 1.31465C3.00299 1.22958 2.78321 1.18579 2.56125 1.18579C2.33928 1.18579 2.1195 1.22958 1.91448 1.31465C1.70976 1.3996 1.52379 1.52405 1.36718 1.68088C1.21034 1.83749 1.08588 2.02348 1.00093 2.2282C0.91586 2.43322 0.87207 2.653 0.87207 2.87497C0.87207 3.09693 0.91586 3.31672 1.00093 3.52173C1.08593 3.72657 1.21047 3.91264 1.36743 4.06931C1.36756 4.06944 1.3677 4.06958 1.36784 4.06972L12.6165 15.3184C12.6166 15.3185 12.6168 15.3187 12.6169 15.3188C12.7736 15.4758 12.9597 15.6003 13.1645 15.6853C13.3695 15.7704 13.5893 15.8141 13.8112 15.8141C14.0332 15.8141 14.253 15.7704 14.458 15.6853C14.6628 15.6003 14.8489 15.4758 15.0056 15.3188C15.0057 15.3187 15.0058 15.3185 15.006 15.3184L26.2553 4.06905C26.4121 3.91224 26.5365 3.72608 26.6214 3.5212L25.9285 3.23419L26.6214 3.52119C26.7063 3.31631 26.7499 3.09672 26.7499 2.87497C26.7499 2.65321 26.7063 2.43362 26.6214 2.22874L26.6214 2.22873C26.5365 2.02385 26.4121 1.8377 26.2553 1.68089L25.725 2.21122L26.2553 1.68088C26.0985 1.52408 25.9124 1.39969 25.7075 1.31483C25.5026 1.22996 25.283 1.18628 25.0612 1.18628C24.8395 1.18628 24.6199 1.22996 24.415 1.31483C24.2101 1.39969 24.024 1.52408 23.8672 1.68088L23.8671 1.68093L13.8112 11.7386Z"
                              fill="#0C63E4" stroke="#0C63E4" stroke-width="1.5"/>
                    </svg>
                </div>
                <div class="faq-body">
                    <div>
                        There is a list of account requirements, compliance with which will allow us to
                        replenish
                        the balance:
                        <br>
                        The login cannot consist only of numbers
                        If the requirement is violated, your funds may hang in the aggregator! Be Careful!
                    </div>
                </div>
            </div>
            <div class="faq-block-item">
                <div class="faq-header">
                    <span>The Steam account balance is not replenished</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 28 17"
                         fill="none">
                        <path d="M13.8112 11.7386L3.756 1.68156C3.75588 1.68144 3.75577 1.68133 3.75566 1.68122C3.59898 1.52423 3.41288 1.39966 3.20801 1.31465C3.00299 1.22958 2.78321 1.18579 2.56125 1.18579C2.33928 1.18579 2.1195 1.22958 1.91448 1.31465C1.70976 1.3996 1.52379 1.52405 1.36718 1.68088C1.21034 1.83749 1.08588 2.02348 1.00093 2.2282C0.91586 2.43322 0.87207 2.653 0.87207 2.87497C0.87207 3.09693 0.91586 3.31672 1.00093 3.52173C1.08593 3.72657 1.21047 3.91264 1.36743 4.06931C1.36756 4.06944 1.3677 4.06958 1.36784 4.06972L12.6165 15.3184C12.6166 15.3185 12.6168 15.3187 12.6169 15.3188C12.7736 15.4758 12.9597 15.6003 13.1645 15.6853C13.3695 15.7704 13.5893 15.8141 13.8112 15.8141C14.0332 15.8141 14.253 15.7704 14.458 15.6853C14.6628 15.6003 14.8489 15.4758 15.0056 15.3188C15.0057 15.3187 15.0058 15.3185 15.006 15.3184L26.2553 4.06905C26.4121 3.91224 26.5365 3.72608 26.6214 3.5212L25.9285 3.23419L26.6214 3.52119C26.7063 3.31631 26.7499 3.09672 26.7499 2.87497C26.7499 2.65321 26.7063 2.43362 26.6214 2.22874L26.6214 2.22873C26.5365 2.02385 26.4121 1.8377 26.2553 1.68089L25.725 2.21122L26.2553 1.68088C26.0985 1.52408 25.9124 1.39969 25.7075 1.31483C25.5026 1.22996 25.283 1.18628 25.0612 1.18628C24.8395 1.18628 24.6199 1.22996 24.415 1.31483C24.2101 1.39969 24.024 1.52408 23.8672 1.68088L23.8671 1.68093L13.8112 11.7386Z"
                              fill="#0C63E4" stroke="#0C63E4" stroke-width="1.5"/>
                    </svg>
                </div>
                <div class="faq-body">
                    <div>
                        if you entered your username correctly (this is not a nickname), the replenishment takes
                        place instantly. In rare cases, due to the high load on payment aggregators, your funds
                        may be credited to your account balance with a delay of up to 24 hours. If you have not
                        received funds to the balance within 6 hours, please contact Technical Support using the
                        contacts on the website
                    </div>
                </div>
            </div>
            <div class="faq-block-item">
                <div class="faq-header">
                    <span>What is a "Login"?</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 28 17"
                         fill="none">
                        <path d="M13.8112 11.7386L3.756 1.68156C3.75588 1.68144 3.75577 1.68133 3.75566 1.68122C3.59898 1.52423 3.41288 1.39966 3.20801 1.31465C3.00299 1.22958 2.78321 1.18579 2.56125 1.18579C2.33928 1.18579 2.1195 1.22958 1.91448 1.31465C1.70976 1.3996 1.52379 1.52405 1.36718 1.68088C1.21034 1.83749 1.08588 2.02348 1.00093 2.2282C0.91586 2.43322 0.87207 2.653 0.87207 2.87497C0.87207 3.09693 0.91586 3.31672 1.00093 3.52173C1.08593 3.72657 1.21047 3.91264 1.36743 4.06931C1.36756 4.06944 1.3677 4.06958 1.36784 4.06972L12.6165 15.3184C12.6166 15.3185 12.6168 15.3187 12.6169 15.3188C12.7736 15.4758 12.9597 15.6003 13.1645 15.6853C13.3695 15.7704 13.5893 15.8141 13.8112 15.8141C14.0332 15.8141 14.253 15.7704 14.458 15.6853C14.6628 15.6003 14.8489 15.4758 15.0056 15.3188C15.0057 15.3187 15.0058 15.3185 15.006 15.3184L26.2553 4.06905C26.4121 3.91224 26.5365 3.72608 26.6214 3.5212L25.9285 3.23419L26.6214 3.52119C26.7063 3.31631 26.7499 3.09672 26.7499 2.87497C26.7499 2.65321 26.7063 2.43362 26.6214 2.22874L26.6214 2.22873C26.5365 2.02385 26.4121 1.8377 26.2553 1.68089L25.725 2.21122L26.2553 1.68088C26.0985 1.52408 25.9124 1.39969 25.7075 1.31483C25.5026 1.22996 25.283 1.18628 25.0612 1.18628C24.8395 1.18628 24.6199 1.22996 24.415 1.31483C24.2101 1.39969 24.024 1.52408 23.8672 1.68088L23.8671 1.68093L13.8112 11.7386Z"
                              fill="#0C63E4" stroke="#0C63E4" stroke-width="1.5"/>
                    </svg>
                </div>
                <div class="faq-body">
                    <div>
                        Login is what you enter during authorization, it is unique for each user, and you can
                        change the nickname at your discretion. There can be hundreds of people with the
                        nickname QWERTY. Don't confuse your username and nickname!
                    </div>
                </div>
            </div>
            <div class="faq-block-item">
                <div class="faq-header">
                    <span>Service commission</span>
                    <svg xmlns="http://www.w3.org/2000/svg" width="28" height="17" viewBox="0 0 28 17"
                         fill="none">
                        <path d="M13.8112 11.7386L3.756 1.68156C3.75588 1.68144 3.75577 1.68133 3.75566 1.68122C3.59898 1.52423 3.41288 1.39966 3.20801 1.31465C3.00299 1.22958 2.78321 1.18579 2.56125 1.18579C2.33928 1.18579 2.1195 1.22958 1.91448 1.31465C1.70976 1.3996 1.52379 1.52405 1.36718 1.68088C1.21034 1.83749 1.08588 2.02348 1.00093 2.2282C0.91586 2.43322 0.87207 2.653 0.87207 2.87497C0.87207 3.09693 0.91586 3.31672 1.00093 3.52173C1.08593 3.72657 1.21047 3.91264 1.36743 4.06931C1.36756 4.06944 1.3677 4.06958 1.36784 4.06972L12.6165 15.3184C12.6166 15.3185 12.6168 15.3187 12.6169 15.3188C12.7736 15.4758 12.9597 15.6003 13.1645 15.6853C13.3695 15.7704 13.5893 15.8141 13.8112 15.8141C14.0332 15.8141 14.253 15.7704 14.458 15.6853C14.6628 15.6003 14.8489 15.4758 15.0056 15.3188C15.0057 15.3187 15.0058 15.3185 15.006 15.3184L26.2553 4.06905C26.4121 3.91224 26.5365 3.72608 26.6214 3.5212L25.9285 3.23419L26.6214 3.52119C26.7063 3.31631 26.7499 3.09672 26.7499 2.87497C26.7499 2.65321 26.7063 2.43362 26.6214 2.22874L26.6214 2.22873C26.5365 2.02385 26.4121 1.8377 26.2553 1.68089L25.725 2.21122L26.2553 1.68088C26.0985 1.52408 25.9124 1.39969 25.7075 1.31483C25.5026 1.22996 25.283 1.18628 25.0612 1.18628C24.8395 1.18628 24.6199 1.22996 24.415 1.31483C24.2101 1.39969 24.024 1.52408 23.8672 1.68088L23.8671 1.68093L13.8112 11.7386Z"
                              fill="#0C63E4" stroke="#0C63E4" stroke-width="1.5"/>
                    </svg>
                </div>
                <div class="faq-body">
                    <div>
                        The service commission can average 4-5%. The rest of the expenses are used to pay
                        commissions for conversion and services of payment aggregators. The exchange rates are
                        updated every second, so the commission amount may vary. This is the only commission we
                        charge on our website. There are no other commissions hidden from the user on the site!
                    </div>
                </div>
            </div>
        </div>
    </div>

    <Footer></Footer>

</template>


<script setup>
import Header from '../gamingonlinestore.com/block/HeaderBlock.vue';
import Footer from '../gamingonlinestore.com/block/FooterBlock.vue';
import ProductBuy from '../gamingonlinestore.com/block/ProductBuy.vue';
import PrivacyPolicy from '../gamingonlinestore.com/block/PrivacyPolicy.vue';
import CookiePolicy from '../gamingonlinestore.com/block/CookiePolicy.vue';
import TermsConditions from '../gamingonlinestore.com/block/TermsConditions.vue';

import {useStore} from 'vuex'
import {onMounted, computed} from "vue";
import {useRoute} from 'vue-router'
import {Swiper, SwiperSlide} from 'swiper/vue';
import {Autoplay} from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/swiper-bundle.css';

const store = useStore()
const isOpenModalBuyProduct = computed(() => store.getters.isOpenModalBuyProduct)
const isOpenModalPrivacyPolicy = computed(() => store.getters.isOpenModalPrivacyPolicy)
const isOpenModalCookiePolicy = computed(() => store.getters.isOpenModalCookiePolicy)
const isOpenModalTerms = computed(() => store.getters.isOpenModalTerms)
const openProductBuy = () => {
    store.dispatch('openModal', 'isOpenModalBuyProduct')
}

const onSwiper = () => {
};

const onSlideChange = () => {
};

const route = useRoute()
const currentRoute = computed(() => route.name ? route.name : '')
const modules = [Autoplay]


onMounted(() => {
    document.addEventListener('click', function (event) {
        let faqHeader = event.target.closest('.faq-header');
        let faqBody;
        if (faqHeader) {
            faqBody = faqHeader.nextElementSibling;
        }
        if (faqHeader && faqBody) {
            if (!faqHeader.classList.contains('active')) {
                faqHeader.classList.add('active');
                faqBody.classList.add('active');
            } else {
                faqHeader.classList.remove('active');
                faqBody.classList.remove('active');
            }
        }
    })
})


</script>

<script>
</script>