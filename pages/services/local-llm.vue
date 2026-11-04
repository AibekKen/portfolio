<template>
  <AiServicePage ns="landings.localLlm" path="/services/local-llm" service-type="On-premise LLM deployment" :default-interest="2">
    <template #visual>
      <LocalLlmDiagram />
    </template>
  </AiServicePage>
</template>
