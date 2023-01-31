<template>
  <div :class="styles.home">
    <div :class="styles.home_main">
      <p :class="styles.home_main_title">OUTDOOR EXPLORATION</p>
      <p :class="styles.home_main_subtitle">
        Gear for when it actually matters.
      </p>
      <p :class="styles.home_main_text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
        varius enim in eros elementum tristique.
      </p>
    </div>
    <div :class="styles.home_about">
      <img
        src="@/assets/images/shape1.png"
        alt="Shape1"
        :class="styles.home_about_shape1"
      />
      <div :class="styles.home_about_partone">
        <img
          src="@/assets/images/alone.png"
          alt="Alone"
          :class="styles.home_about_partone_img"
        />
      </div>
      <div :class="styles.home_about_parttwo">
        <p :class="styles.home_about_parttwo_title">WHO ARE WE?</p>
        <p :class="styles.home_about_parttwo_subtitle">A bit about us.</p>
        <p :class="styles.home_about_parttwo_text">
          We are an outdoor gear company focused on Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. Nullam scelerisque aliquam odio et
          faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex,
          condimentum dapibus congue et.
        </p>
        <div :class="styles.home_about_parttwo_footer">
          Read more
          <img
            src="@/assets/images/Path.png"
            alt="Strelka"
            :class="styles.home_about_parttwo_img"
          />
        </div>
      </div>
      <img
        src="@/assets/images/shape2.png"
        alt="Shape2"
        :class="styles.home_about_shape2"
      />
    </div>
    <div :class="styles.home_promise">
      <img
        src="@/assets/images/shape3.png"
        alt="shape3"
        :class="styles.home_promise_shape3"
      />
      <p :class="styles.home_promise_title">OUR PROMISE</p>
      <p :class="styles.home_promise_subtitle">
        Setting the bar for our products.
      </p>
      <p :class="styles.home_promise_text">
        Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
        Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
        ut faucibus orci tincidunt.
      </p>
      <div :class="styles.home_promise_bfamily">
        <div
          :class="styles.home_promise_bfamily_items"
          v-for="item in group"
          :key="item.id"
        >
          <img
            :src="item.link"
            alt="image"
            :class="styles.home_promise_bfamily_items_img"
          />
          <p :class="styles.home_promise_bfamily_items_title">
            {{ item.title }}
          </p>
          <p :class="styles.home_promise_bfamily_items_text">{{ item.text }}</p>
        </div>
      </div>
      <img
        src="@/assets/images/shape4.png"
        alt="Shape4"
        :class="styles.home_promise_shape4"
      />
    </div>
    <div :class="styles.home_family">
      <p :class="styles.home_family_title">MEET THE FAMILY</p>
      <p :class="styles.home_family_subtitle">What we have in store for you.</p>
      <p :class="styles.home_family_text">
        Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
        Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
        ut faucibus orci tincidunt.
      </p>
      <div :class="styles.home_family_minifamily">
        <div
          :class="[
            styles.home_family_minifamily_members,
            styles.home_family_minifamily_active,
          ]"
        >
          <p :class="styles.home_family_minifamily_members_title">
            Accessories
          </p>
          <p :class="styles.home_family_minifamily_members_subtitle">
            Accessories you didn't know you needed.
          </p>
          <div :class="styles.home_family_minifamily_members_footer">
            View Accessories <img src="@/assets/images/Path.png" alt="path" />
          </div>
        </div>
        <div
          :class="[
            styles.home_family_minifamily_members,
            styles.home_family_minifamily_active1,
          ]"
        >
          <p :class="styles.home_family_minifamily_members_title">Apparel</p>
          <p :class="styles.home_family_minifamily_members_subtitle">
            Check out our line of non-hiking clothes.
          </p>
          <div :class="styles.home_family_minifamily_members_footer">
            View Apparel <img src="@/assets/images/Path.png" alt="path" />
          </div>
        </div>
        <div
          :class="[
            styles.home_family_minifamily_members,
            styles.home_family_minifamily_active2,
          ]"
        >
          <p :class="styles.home_family_minifamily_members_title">
            Climbing Gear
          </p>
          <p :class="styles.home_family_minifamily_members_subtitle">
            Climbing gear for every occasion.
          </p>
          <div :class="styles.home_family_minifamily_members_footer">
            View Climbing Gear <img src="@/assets/images/Path.png" alt="path" />
          </div>
        </div>
        <div
          :class="[
            styles.home_family_minifamily_members,
            styles.home_family_minifamily_active3,
          ]"
        >
          <p :class="styles.home_family_minifamily_members_title">Headwear</p>
          <p :class="styles.home_family_minifamily_members_subtitle">
            Our beanies are so comfy you won't believe it.
          </p>
          <div :class="styles.home_family_minifamily_members_footer">
            View Headwear <img src="@/assets/images/Path.png" alt="path" />
          </div>
        </div>
        <div
          :class="[
            styles.home_family_minifamily_members,
            styles.home_family_minifamily_active4,
          ]"
        >
          <p :class="styles.home_family_minifamily_members_title">
            Hiking Gear
          </p>
          <p :class="styles.home_family_minifamily_members_subtitle">
            Desert or mountain? Doesn't matter.
          </p>
          <div :class="styles.home_family_minifamily_members_footer">
            View Hiking Gear <img src="@/assets/images/Path.png" alt="path" />
          </div>
        </div>
        <div
          :class="[
            styles.home_family_minifamily_members,
            styles.home_family_minifamily_active5,
          ]"
        >
          <p :class="styles.home_family_minifamily_members_title">Jackets</p>
          <p :class="styles.home_family_minifamily_members_subtitle">
            Our jackets are perfect for every season.
          </p>
          <div :class="styles.home_family_minifamily_members_footer">
            View Jackets<img src="@/assets/images/Path.png" alt="path" />
          </div>
        </div>
      </div>
      <div :class="styles.home_family_footer">
        Show all categories <img src="@/assets/images/Path.png" alt="path" />
      </div>
    </div>
    <div :class="styles.home_alone">
      <img
        src="@/assets/images/framealone.png"
        alt="AloneFrame"
        :class="styles.home_alone_img"
      />
    </div>
    <div :class="styles.home_shop">
      <p :class="styles.home_shop_title">SHOP</p>
      <p :class="styles.home_shop_subtitle">Check out our products.</p>
      <p :class="styles.home_shop_text">
        Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
        Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
        ut faucibus orci tincidunt.
      </p>
      <div :class="styles.home_shop_btn">Visit shop</div>
      <img
        src="@/assets/images/shape5.png"
        alt="shape5"
        :class="styles.home_shop_shape5"
      />
    </div>
    <div :class="styles.home_buyerguides">
      <p :class="styles.home_buyerguides_title">BUYER'S GUIDES</p>
      <p :class="styles.home_buyerguides_subtitle">Navigating our offering.</p>
      <p :class="styles.home_buyerguides_text">
        Morbi neque ex, condimentum dapibus congue et, vulputate ut ligula.
        Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices,
        ut faucibus orci tincidunt.
      </p>
      <div :class="styles.home_buyerguides_group">
        <div :class="styles.home_buyerguides_group_item1">
          <img
            src="@/assets/images/double1.png"
            alt="double1"
            :class="styles.home_buyerguides_group_item1_img"
          />
          <p :class="styles.home_buyerguides_group_subtext">
            3 climbing accessories for the climber that has everything
          </p>
          <div :class="styles.home_buyerguides_group_footer">
            <div :class="styles.home_buyerguides_group_footer_one">
              <img
                src="@/assets/images/miniportret1.png"
                alt="miniportret1"
                :class="styles.home_buyerguides_group_footer_one_img"
              />
              <div :class="styles.home_buyerguides_group_footer_one_mot">
                <span :class="styles.home_buyerguides_group_footer_one_name"
                  >Alex Jenna</span
                >
                <p :class="styles.home_buyerguides_group_footer_one_job"
                  >QA</p>
              </div>
            </div>
            <div :class="styles.home_buyerguides_group_footer_date">
              October 18,2021
            </div>
          </div>
        </div>
        <div :class="styles.home_buyerguides_group_item2">
          <img
            src="@/assets/images/double2.png"
            alt="double2"
            :class="styles.home_buyerguides_group_item2_img"
          />
          <p :class="styles.home_buyerguides_group_subtext">
            Biking accessories for the beaten path
          </p>
          <div :class="styles.home_buyerguides_group_footer">
            <div :class="styles.home_buyerguides_group_footer_one">
              <img
                src="@/assets/images/miniportret2.png"
                alt="miniportret"
                :class="styles.home_buyerguides_group_footer_one_img"
              />
              <div :class="styles.home_buyerguides_group_footer_one_mot">
                <span :class="styles.home_buyerguides_group_footer_one_name"
                  >Woodie Brandon</span
                >
                <p :class="styles.home_buyerguides_group_footer_one_job"
                  >Product Designer</p
                >
              </div>
            </div>
            <div :class="styles.home_buyerguides_group_footer_date">
              October 18,2021
            </div>
          </div>
        </div>
      </div>
      <div :class="styles.home_buyerguides_footer">
        Show all buyer's guides <img src="@/assets/images/Path.png" alt="Path">
      </div>
    </div>
    <div :class="styles.home_magazine">
      <img src="@/assets/images/magazine.png" alt="Magazine" :class="styles.home_magazine_img">
      <div :class="styles.home_magazine_two">
        <p :class="styles.home_magazine_two_title">SOME LIGHT READING</p>
        <p :class="styles.home_magazine_two_subtitle">Subscribe to our magazine today.</p>
        <p :class="styles.home_magazine_two_text">We are an outdoor gear company focused on Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam scelerisque aliquam odio et faucibus. Nulla rhoncus feugiat eros quis consectetur. Morbi neque ex, condimentum dapibus congue et.</p>
        <div :class="styles.home_magazine_two_footer">
          Read more <img src="@/assets/images/Path.png" alt="Path">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import styles from "./Home.module.scss";
import Container from "@/components/UI/Container/Container.vue";
import store from "@/store";
export default {
  name: "Home",
  components: {
    Container,
  },
  computed: {
    group: () => store?.state?.group?.group,
  },
  mounted() {
    console.log(store?.state?.group?.group[0]?.link);
  },
  data() {
    return {
      styles,
    };
  },
};
</script>

<style></style>
