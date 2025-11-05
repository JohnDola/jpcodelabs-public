<script setup lang="ts">
import { ref } from 'vue'
import { useScroll } from '@vueuse/core'
import { Menu, X } from 'lucide-vue-next'
import Button from './ui/Button.vue'

const { y } = useScroll(window)
const isScrolled = ref(false)
const isMobileMenuOpen = ref(false)

// Watch scroll position
const updateScrollState = () => {
    isScrolled.value = y.value > 50
}

// Update on scroll
if (typeof window !== 'undefined') {
    window.addEventListener('scroll', updateScrollState)
}

const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
        isMobileMenuOpen.value = false
    }
}

// Add smooth scroll behavior to HTML
if (typeof window !== 'undefined') {
    document.documentElement.style.scrollBehavior = 'smooth'
}

const navLinks = [
    { label: 'Über uns', id: 'about' },
    { label: 'Leistungen', id: 'solution' },
    { label: 'Use Cases', id: 'use-cases' },
    { label: 'Kontakt', id: 'contact' },
]
</script>

<template>
    <nav :class="[
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
        isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
            : 'bg-transparent text-white py-6',
    ]">
        <div class="max-w-6xl mx-auto px-6">
            <div class="flex items-center justify-between">
                <!-- Logo -->
                <button @click="scrollToSection('hero')" class="ml-48 md:ml-0 flex items-center gap-2 group">
                    <!-- <div
                        class="w-10 h-10 bg-gradient-to-br from-orange-500 to-amber-500 rounded-lg flex items-center justify-center transition-transform group-hover:scale-105">
                        <span class="text-white font-bold text-xl">JP</span>
                    </div> -->
                    <div class="flex flex-col">
                        <span :class="[
                            'font-bold text-lg leading-tight transition-colors',
                            isScrolled ? 'text-slate-900' : 'text-white',
                        ]">
                            <span :class="['font-black', isScrolled ? 'text-slate-600' : 'text-white']">JP</span>
                            <span :class="['font-thin', isScrolled ? 'text-slate-600' : 'text-white']">Codelabs</span>
                        </span>
                        <span :class="[
                            'text-xs font-medium leading-tight transition-colors uppercase',
                            isScrolled ? 'text-orange-800' : 'text-orange-600',
                        ]">
                            <span :class="['font-thin', isScrolled ? 'text-slate-800' : 'text-white']">Automate. </span>
                            <span class="font-normal text-primary-600">Innovate. </span>
                            <span class="font-black text-primary-500">Accelerate. </span> </span>
                    </div>
                </button>

                <!-- Desktop Navigation -->
                <div class="hidden md:flex items-center gap-8">
                    <button v-for="link in navLinks" :key="link.id" @click="scrollToSection(link.id)" :class="[
                        'text-sm font-medium transition-colors hover:text-orange-600',
                        isScrolled ? 'text-slate-700' : 'text-white',
                    ]">
                        {{ link.label }}
                    </button>
                </div>

                <!-- CTA Button (Desktop) -->
                <div class="hidden md:block">
                    <Button variant="primary" @click="scrollToSection('contact')">
                        Prozess-Check anfragen
                    </Button>
                </div>

                <!-- Mobile Menu Button -->
                <button @click="isMobileMenuOpen = !isMobileMenuOpen" :class="[
                    'md:hidden p-2 rounded-lg transition-colors',
                    isScrolled ? 'text-slate-900 hover:bg-slate-100' : 'text-white hover:bg-white/50',
                ]">
                    <Menu v-if="!isMobileMenuOpen" class="w-6 h-6 text-wj" />
                    <X v-else class="w-6 h-6" />
                </button>
            </div>
        </div>

        <!-- Mobile Menu -->
        <Transition enter-active-class="transition-all duration-300 ease-out"
            enter-from-class="opacity-0 -translate-y-4" enter-to-class="opacity-100 translate-y-0"
            leave-active-class="transition-all duration-200 ease-in" leave-from-class="opacity-100 translate-y-0"
            leave-to-class="opacity-0 -translate-y-4">
            <div v-if="isMobileMenuOpen"
                class="md:hidden absolute top-full left-0 right-0 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-lg">
                <div class="px-6 py-4 space-y-3">
                    <button v-for="link in navLinks" :key="link.id" @click="scrollToSection(link.id)"
                        class="block w-full text-left px-4 py-3 text-slate-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-colors font-medium">
                        {{ link.label }}
                    </button>
                    <div class="pt-2">
                        <Button variant="primary" @click="scrollToSection('contact')" class="w-full">
                            Prozess-Check anfragen
                        </Button>
                    </div>
                </div>
            </div>
        </Transition>
    </nav>

    <!-- Spacer to prevent content jump -->
    <div :class="isScrolled ? 'h-16' : 'h-20'"></div>
</template>
