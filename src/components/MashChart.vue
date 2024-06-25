<script setup lang="ts">
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  TimeScale,
  ChartOptions,
} from 'chart.js'
import 'chartjs-adapter-moment'
import { computed } from 'vue'
import { Line } from 'vue-chartjs'
import { MashStep } from 'src/types/models'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  TimeScale,
  Title,
  Tooltip,
  Legend
)

ChartJS.register(Title, Tooltip, Legend, LineElement, LinearScale)

const steps = defineModel<MashStep[]>('steps', {
  required: true,
})

type MashChartPoint = {
  x: number
  y: number
  name: string
}

const data = computed<MashChartPoint[]>(() => convertData())
const min = computed(
  () => Math.trunc((Math.min(...data.value.map((s) => s.y)) - 5) / 10) * 10 - 5
)
const max = computed(
  () => Math.trunc((Math.max(...data.value.map((s) => s.y)) + 5) / 10) * 10 + 5
)
function convertData() {
  const data: MashChartPoint[] = []
  let timeAccumulator = 0
  for (let i = 0; i < steps.value.length; i++) {
    timeAccumulator += 5

    data.push({
      x: timeAccumulator,
      y: steps.value[i].temperature,
      name: steps.value[i].name,
    })
    timeAccumulator += steps.value[i].duration
    data.push({
      x: timeAccumulator,
      y: steps.value[i].temperature,
      name: steps.value[i].name,
    })
  }
  return data
}

const chartData = computed(() => ({
  datasets: [
    {
      label: 'Rampas',
      data: data.value,
      backgroundColor: '#1976D2',
      borderColor: '#1976D2',
      pointBackgroundColor: '#FFFFFF',
    },
  ],
}))

const chartOptions = computed<ChartOptions<'line'>>(() => ({
  responsive: true,
  scales: {
    x: {
      type: 'linear' as const,
    },
    y: {
      max: max.value,
      min: min.value,
    },
  },
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: 'Rampas de mostura',
    },
    tooltip: {
      callbacks: {
        title: () => '',
        label: (ctx) =>
          `${(ctx.raw as MashChartPoint).name} ${ctx.formattedValue}`,
      },
    },
  },
}))
</script>

<template>
  <Line id="my-chart-id" :options="chartOptions" :data="chartData" />
</template>
