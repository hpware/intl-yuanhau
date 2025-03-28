<script setup lang="ts">
import "~/components/icons.css";
import "~/components/app.css";
import NavBar from "~/components/NavBar.vue";
import { defineProps, ref, onMounted } from "vue";
const data = ref("");
const announce = ref(false);
const animationComplete = ref(false);

onMounted(() => {
  data.value = "This verison of the website, is currently being discontiued at the end of the year. Please go to <a href='https://yhw.tw/yuanhaucombeta'>the new beta verison</a>.";
  announce.value = true;

  setTimeout(() => {
    closeAnnouncement();
  }, 8000);
});

function closeAnnouncement() {
  animationComplete.value = true;
  setTimeout(() => {
    announce.value = false;
  }, 500);
}
</script>
<template>
  <NuxtLoadingIndicator color="#47a6ff" />
  <NuxtLayout>
    <NavBar />
      <Transition name="slide-down">
    <div v-if="announce" :class="['announcement', { exit: animationComplete }]">
      <div class="content">
        <button
          @click="closeAnnouncement"
          class="close-btn"
          aria-label="Close announcement"
        >
          <i class="bi bi-x"></i>
        </button>
        <div class="message">
          <h3>系統訊息</h3>
          <span class="data" v-html="data"></span>
        </div>
      </div>
      <div class="progress-bar"></div>
    </div>
  </Transition>
    <NuxtPage />
    <footer>
      <p style="text-align: center; font-size: 0.6em">
        Copyright © {{ new Date().getFullYear() }} yuanhau
      </p>
    </footer>
    <noscript>This website requires javascript.</noscript>
  </NuxtLayout>
</template>
<style scoped>
footer {
  position: fixed;
  bottom: 1rem;
  text-align: center;
  color: rgba(255, 255, 255, 0.829);
  p {
    font-size: 0.6em;
    margin-bottom: 0;
    margin-left: 0.5em;
  }
  a {
    text-decoration: none;
    font-size: 0.8em;
  }
}
.t {
  color: linear-gradient(#47a6ff, #0ccf4d);
}
  .announcement {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  background-color: #d5a718;
  color: #000;
  z-index: 999;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.3);
  overflow: hidden;
  max-height: 80px;
  h3 {
    margin: 0 0 5px 0;
    font-size: 0.9em;
    font-weight: 600;
  }
  .content {
    display: flex;
    align-items: center;
    padding: 12px 15px;
    position: relative;
  }
  .message {
    flex: 1;
  }

  .data {
    font-size: 0.85em;
    display: block;
    line-height: 1.4;
  }

  .close-btn {
    background: transparent;
    border: none;
    cursor: pointer;
    font-size: 1.2em;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 5px;
    color: #000;
    border-radius: 50%;
    width: 30px;
    height: 30px;
    transition: background-color 0.2s;
  }

  .close-btn:hover {
    background-color: rgba(0, 0, 0, 0.1);
  }
}

.progress-bar {
  height: 3px;
  background-color: rgba(0, 0, 0, 0.3);
  width: 100%;
  position: absolute;
  bottom: 0;
  left: 0;
  animation: countdown 8s linear forwards;
}

@keyframes countdown {
  from {
    width: 100%;
  }
  to {
    width: 0%;
  }
}

/* Transitions */
.slide-down-enter-active,
.slide-down-leave-active {
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;
}

.slide-down-enter-from,
.slide-down-leave-to {
  transform: translateY(-100%);
  opacity: 0;
}

/* Mobile optimization */
@media screen and (max-width: 600px) {
  .announcement {
    max-height: none;
  }

  .announcement-content {
    flex-direction: column;
    text-align: center;
    padding: 15px 10px;
  }

  .icon {
    margin: 0 0 8px 0;
  }

  .close-btn {
    position: absolute;
    top: 10px;
    right: 10px;
  }
}
</style>
