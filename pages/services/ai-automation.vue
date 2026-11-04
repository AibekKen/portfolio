<template>
  <AiServicePage ns="automation" path="/services/ai-automation" service-type="AI business process automation" :default-interest="3" :min-price="300000" show-quote>
    <template #visual>
      <AutomationFlow />
    </template>
  </AiServicePage>
</template>
