<script setup lang="ts">
import { RouterLink, RouterView } from "vue-router";
import HelloWorld from "./components/HelloWorld.vue";
import { onBeforeUnmount, onMounted, provide, ref } from "vue";

const targetTime = new Date("2022-11-25 23:44:00");
const countdown = ref(formatTime(targetTime.valueOf() - Date.now()));
const timer = 0;

setInterval(() => {
  const diff = targetTime.valueOf() - Date.now();
  if (diff < 1000) {
    clearInterval(timer);
    countdown.value = "";
    return;
  }
  countdown.value = formatTime(diff);
}, 1000);

onBeforeUnmount(() => {
  clearInterval(timer);
});

const message = ref("hello");

provide("message", message);

setTimeout(() => {
  message.value = "world";
}, 2000);

function formatTime(time: number): string {
  const hour = Math.floor(time / 1000 / 3600);
  const minute = Math.floor((time - hour * 3600 * 1000) / 1000 / 60);
  const second = Math.floor(
    (time - hour * 3600 * 1000 - minute * 60 * 1000) / 1000
  );
  return padZero(hour) + ":" + padZero(minute) + ":" + padZero(second);
}

function padZero(num: number): string {
  return num < 10 ? `0${num}` : String(num);
}

function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = padZero(date.getMonth() + 1);
  const day = padZero(date.getDate());
  const hour = padZero(date.getHours());
  const minute = padZero(date.getMinutes());
  const second = padZero(date.getSeconds());

  return `${year}-${month}-${day} ${hour}:${minute}:${second}`;
}

let start = 0;
function raf(timestamp: number) {
  if (start === 0) {
    start = timestamp;
  }
  const ellapse = timestamp - start;
  const box = document.querySelector(".box") as HTMLDivElement;
  box.style.width = parseFloat(getComputedStyle(box).width) + 1 + "px";
  box.style.height = parseFloat(getComputedStyle(box).height) + 1 + "px";
  console.log("timestamp", timestamp);
  if (ellapse < 2000) {
    requestAnimationFrame(raf);
  }
}

onMounted(() => {
  // requestAnimationFrame(raf);
});
</script>

<template>
  <header>
    <img
      alt="Vue logo"
      class="logo"
      src="@/assets/logo.svg"
      width="125"
      height="125"
    />

    <div class="wrapper">
      <!--      <div class="countdown">-->
      <!--        距离{{ formatDate(targetTime) }},-->
      <!--        {{ countdown ? `还有${countdown}` : "时间到" }}-->
      <!--      </div>-->

      <div class="box"></div>

      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
.box {
  width: 20px;
  height: 20px;
  background: cadetblue;
}
</style>
