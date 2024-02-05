<template>
  <section class="bg-[#111827] py-[144px] flex flex-col gap-[128px]">
    <!--component Card has default mode(textBlock image) and reverse mode(image textBlock)-->
    <Card
      title="We do campaigns that works well for your idea"
      paragraph="Our documentary campaigns feature leading figures, organisations and leaders, in open and candid discussions about transformative strategies and mindsets. Addressing complex trends."
      link="All campaigns"
      mode="default"
      image="/images/tower.png"
    />

    <Card
      title="We make films that stick in your heart"
      paragraph="This exclusive service provided by our team of professional content creators is available for global use. Our clients will have
       access and total creative control throughout the process of production, with resources and talent supplied by us."
      link="I have an idea for film"
      mode="reverse"
      image="/images/camera.png"
    />

    <Card
      title="We do event marketing to attract cool guys"
      paragraph="Our marketing team is well-versed in creating the right strategy for every campaign, working with clients to deliver their desired outcome. We create effective plans, eye-catching digital aids, and dynamic solutions."
      link="Start an event marketing"
      mode="default"
      image="/images/stadion.png"
    />
  </section>
</template>

<script setup>
</script>

<style lang="scss" scoped>
</style>