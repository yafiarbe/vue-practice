<script setup>
defineProps({
  count: Number,
  value: Number
})
</script>

<template>
  <!-- Количество -->
  <span class="font-bold" v-if="count > 1">{{ count }}</span>
  <!-- <span>{{ count }}</span> -->
  <!-- 1 Дюйм -->
  <svg
    class="h-4 w-4 inline mx-0.5 mb-0.5"
    v-if="value === 1"
    width="64px"
    height="64px"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        d="M7.93189 1.24806C7.84228 1.09446 7.67783 1 7.5 1C7.32217 1 7.15772 1.09446 7.06811 1.24806L0.0681106 13.2481C-0.0220988 13.4027 -0.0227402 13.5938 0.0664289 13.749C0.155598 13.9043 0.320967 14 0.5 14H14.5C14.679 14 14.8444 13.9043 14.9336 13.749C15.0227 13.5938 15.0221 13.4027 14.9319 13.2481L7.93189 1.24806Z"
        fill="#000000"
      ></path>
    </g>
  </svg>

  <!-- 2 Дюйма -->
  <svg
    class="h-4 w-4 inline mx-0.5 mb-0.5"
    v-else-if="value === 2"
    fill="#000000"
    height="64px"
    width="64px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 330.00 330.00"
    xml:space="preserve"
    stroke="#000000"
    stroke-width="1"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0" transform="translate(0,0), scale(1)">
      <rect
        x="0"
        y="0"
        width="330.00"
        height="330.00"
        rx="165"
        fill="#ffffff"
        strokewidth="0"
      ></rect>
    </g>
    <g
      id="SVGRepo_tracerCarrier"
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke="#CCCCCC"
      stroke-width="8.58"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <path
        id="XMLID_520_"
        d="M165,0C74.019,0,0,74.019,0,165s74.019,165,165,165s165-74.019,165-165S255.982,0,165,0z M165,300 C90.561,300,30,239.44,30,165S90.561,30,165,30c74.439,0,135,60.561,135,135S239.439,300,165,300z"
      ></path>
    </g>
  </svg>

  <!-- 3 Дюйма -->
  <svg
    class="h-4 w-4 inline mx-0.5 mb-0.5"
    v-else-if="value === 3"
    fill="#000000"
    height="64px"
    width="64px"
    version="1.1"
    id="Layer_1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    viewBox="0 0 330.00 330.00"
    xml:space="preserve"
    stroke="#000000"
    stroke-width="1"
  >
    <g id="SVGRepo_bgCarrier" stroke-width="0">
      <rect x="0" y="0" width="330.00" height="330.00" rx="0" fill="#2b6afd" strokewidth="0"></rect>
    </g>
    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
    <g id="SVGRepo_iconCarrier">
      <path
        id="XMLID_523_"
        d="M315,0H15C6.716,0,0,6.716,0,15v300c0,8.284,6.716,15,15,15h300c8.284,0,15-6.716,15-15V15 C330,6.716,323.285,0,315,0z M300,300H30V30h270V300z"
      ></path>
    </g>
  </svg>

  <!-- 6 Дюймов -->
  <svg
    class="h-5 w-auto inline mx-0.5 mb-0.5"
    v-else-if="value === 6"
    width="100%"
    height="100%"
    viewBox="0 0 24 24"
    fill="red"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M11.0605 2.93203C11.3983 2.68689 11.5672 2.56432 11.7518 2.51696C11.9148 2.47514 12.0858 2.47514 12.2488 2.51696C12.4334 2.56432 12.6023 2.68689 12.9401 2.93203L21.0586 8.82396C21.397 9.06956 21.5663 9.19235 21.6686 9.3535C21.7589 9.49579 21.8119 9.65862 21.8224 9.82684C21.8344 10.0174 21.7697 10.2162 21.6404 10.6138L18.5401 20.1449C18.4109 20.5421 18.3463 20.7407 18.2247 20.8876C18.1173 21.0173 17.979 21.1178 17.8224 21.1798C17.6451 21.25 17.4362 21.25 17.0186 21.25H6.98203C6.56437 21.25 6.35554 21.25 6.17822 21.1798C6.02164 21.1178 5.88325 21.0173 5.77589 20.8876C5.65429 20.7407 5.58969 20.5421 5.4605 20.1449L2.36021 10.6138C2.23086 10.2162 2.16619 10.0174 2.17817 9.82684C2.18874 9.65862 2.24166 9.49579 2.33202 9.3535C2.43434 9.19235 2.60355 9.06956 2.94196 8.82396L11.0605 2.93203Z"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
</template>

<style scoped></style>

<!-- <InchIcons :count='' :value='' /> -->
