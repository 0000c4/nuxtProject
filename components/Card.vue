<template>
<!--textBlock image mode-->
  <div
    v-if="mode == 'default'"
    class="mx-auto max-w-[1488px] flex items-center gap-16 px-4 lg:flex-col-reverse"
  >
    <div class="flex flex-col">
      <svg
       class="prexl:hidden"
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 48V13C1 6.37258 6.37258 1 13 1H47.5"
          stroke="#6B7280"
          stroke-linecap="round"
        />
      </svg>

      <div class="flex flex-col items-center max-w-[616px] px-12 sm:px-0">
        <h1 class="mb-6 text-[#F9FAFB] text-[48px] xl:text-[32px]">
          {{ title }}
        </h1>
        <p class="mb-12 text-[#E5E7EB] text-[20px] xl:text-[18px]">
          {{ paragraph }}
        </p>
        <a class="flex gap-3 items-center self-start group">
          <span
            class="bg-gradient-to-r from-[#6366F1] to-[#AC54F1] bg-clip-text text-transparent text-[18px]"
            >{{ link }}</span
          >
          <svg
            class="group-hover:translate-x-1 transition-all"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1402_3)">
              <path
                d="M13.6887 6.5L18.5 12L13.6887 17.5M18.1232 12H5.5"
                stroke="#AC55F2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1402_3">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(24) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <svg
        class="self-end prexl:hidden"
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.5 1V36C47.5 42.6274 42.1274 48 35.5 48H1"
          stroke="#6B7280"
          stroke-linecap="round"
        />
      </svg>
    </div>

    <img class="xxl:w-[57vw] lg:w-[620px] md:w-[480px] sm:w-[328px]" :src="image" alt="" srcset="" />

  </div>


  <!--image textBlock mode-->
  <div v-else class="mx-auto max-w-[1488px] flex items-center gap-16  px-4 lg:flex-col">
    <img class="xxl:w-[57vw] lg:w-[620px] md:w-[480px] sm:w-[328px]" :src="image" alt="" srcset="" />
    <div class="flex flex-col">
      <svg
      class="self-end rotate-90 prexl:hidden"
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1 48V13C1 6.37258 6.37258 1 13 1H47.5"
          stroke="#6B7280"
          stroke-linecap="round"
        />
      </svg>

      <div class="flex flex-col items-center max-w-[616px] px-12 sm:px-0">
        <h1 class="mb-6 text-[#F9FAFB] text-[48px] xl:text-[32px]">
          {{ title }}
        </h1>
        <p class="mb-12 text-[#E5E7EB] text-[20px] xl:text-[18px]">
          {{ paragraph }}
        </p>
        <a class="flex gap-3 items-center self-start group">
          <span
            class="bg-gradient-to-r from-[#6366F1] to-[#AC54F1] bg-clip-text text-transparent text-[18px]"
            >{{ link }}</span
          >
          <svg
            class="group-hover:translate-x-1 transition-all"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g clip-path="url(#clip0_1402_3)">
              <path
                d="M13.6887 6.5L18.5 12L13.6887 17.5M18.1232 12H5.5"
                stroke="#AC55F2"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </g>
            <defs>
              <clipPath id="clip0_1402_3">
                <rect
                  width="24"
                  height="24"
                  fill="white"
                  transform="translate(24) rotate(90)"
                />
              </clipPath>
            </defs>
          </svg>
        </a>
      </div>
      <svg
        class="self-start  rotate-90 prexl:hidden"
        width="48"
        height="49"
        viewBox="0 0 48 49"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M47.5 1V36C47.5 42.6274 42.1274 48 35.5 48H1"
          stroke="#6B7280"
          stroke-linecap="round"
        />
      </svg>
    </div>
  </div>
</template>

<script setup>
const { title, paragraph, link, mode, image } = defineProps([
  "title",
  "paragraph",
  "link",
  "mode",
  "image"
]);
/* const {paragraph} = defineProps(['paragraph'])
    const {link} = defineProps(['link'])
    const {mode} = defineProps(['mode'])*/
</script>

<style lang="scss" scoped>
</style>