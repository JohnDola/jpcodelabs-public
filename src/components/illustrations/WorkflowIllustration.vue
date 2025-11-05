<template>
    <svg viewBox="0 0 500 400" fill="none" xmlns="http://www.w3.org/2000/svg" class="w-full h-full">
        <!-- Background Circle -->
        <circle cx="250" cy="200" r="180" fill="#FFF7ED" opacity="0.5" />

        <!-- Workflow Nodes -->
        <g>
            <!-- Node 1 -->
            <rect x="80" y="160" width="80" height="80" rx="16" fill="#FFEDD5" stroke="#EA580C" stroke-width="3" />
            <circle cx="120" cy="200" r="20" fill="#EA580C" opacity="0.2" />
            <path d="M110 200 L115 205 L130 190" stroke="#EA580C" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round" />

            <!-- Arrow 1 -->
            <path d="M160 200 L200 200" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
            <path d="M195 195 L200 200 L195 205" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round" />

            <!-- Node 2 -->
            <rect x="210" y="160" width="80" height="80" rx="16" fill="#FED7AA" stroke="#EA580C" stroke-width="3" />
            <circle cx="250" cy="200" r="20" fill="#EA580C" opacity="0.2" />
            <circle cx="250" cy="200" r="12" fill="#EA580C" />

            <!-- Arrow 2 -->
            <path d="M290 200 L330 200" stroke="#F59E0B" stroke-width="3" stroke-linecap="round" />
            <path d="M325 195 L330 200 L325 205" stroke="#F59E0B" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round" />

            <!-- Node 3 -->
            <rect x="340" y="160" width="80" height="80" rx="16" fill="#FFEDD5" stroke="#EA580C" stroke-width="3" />
            <circle cx="380" cy="200" r="20" fill="#EA580C" opacity="0.2" />
            <path d="M370 200 L375 205 L390 190" stroke="#EA580C" stroke-width="3" stroke-linecap="round"
                stroke-linejoin="round" />
        </g>

        <!-- Floating Elements -->
        <g opacity="0.6">
            <circle cx="100" cy="100" r="8" fill="#F59E0B" />
            <circle cx="400" cy="120" r="6" fill="#EA580C" />
            <circle cx="150" cy="320" r="10" fill="#FDBA74" />
            <circle cx="380" cy="300" r="7" fill="#F59E0B" />
        </g>

        <!-- Automation Symbol -->
        <g transform="translate(220, 80)">
            <circle cx="30" cy="30" r="25" fill="white" stroke="#EA580C" stroke-width="2" />
            <path d="M20 30 L25 35 L40 20" stroke="#EA580C" stroke-width="2.5" stroke-linecap="round"
                stroke-linejoin="round" />
        </g>
    </svg>
</template>

<script setup lang="ts">
// Workflow automation illustration in orange theme
</script>
