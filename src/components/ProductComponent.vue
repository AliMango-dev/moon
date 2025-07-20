    <script setup>
    import { defineProps, defineEmits } from 'vue'

    const props = defineProps({
    product: Object,
    index: Number
    })

    const emit = defineEmits(['increase', 'decrease', 'remove'])

    const increase = () => emit('increase', props.index)
    const decrease = () => emit('decrease', props.index)
    const remove = () => emit('remove', props.index)
    </script>

    <template>
    <tr>
        <td><button class="btn text-danger p-0" @click="remove">✕</button></td>
        <td><img :src="product.image" class="img-fluid rounded" width="60" /></td>
        <td class="text-dark">{{ product.name }}</td>
        <td class="text-dark">${{ product.price }}</td>
        <td>
        <div class="quintity-button d-inline-flex align-items-center rounded-0 px-2">
            <svg @click="decrease" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-dash-lg me-3" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8"/></svg>
            <p class="quantity-output text-center mt-3">{{ product.quantity }}</p>
            <svg @click="increase" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-plus-lg ms-3" viewBox="0 0 16 16"><path fill-rule="evenodd" d="M8 2a.5.5 0 0 1 .5.5v5h5a.5.5 0 0 1 0 1h-5v5a.5.5 0 0 1-1 0v-5h-5a.5.5 0 0 1 0-1h5v-5A.5.5 0 0 1 8 2"/></svg>
        </div>
        </td>
        <td class="text-danger">${{ product.price * product.quantity }}</td>
    </tr>
    </template>

