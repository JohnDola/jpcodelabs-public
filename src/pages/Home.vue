<script setup lang="ts">
import AppNavigation from '../components/AppNavigation.vue'
import HeroSection from '../components/sections/HeroSection.vue'
import ProblemSection from '../components/sections/ProblemSection.vue'
import SolutionSection from '../components/sections/SolutionSection.vue'
import ProcessSection from '../components/sections/ProcessSection.vue'
import UseCasesSection from '../components/sections/UseCasesSection.vue'
import TestimonialsSection from '../components/sections/TestimonialsSection.vue'
import TeamSection from '../components/sections/TeamSection.vue'
import TechStackSection from '../components/sections/TechStackSection.vue'
import ContactForm from '../components/sections/ContactForm.vue'
import AppFooter from '../components/AppFooter.vue'
</script>

<template>
    <div class="min-h-screen">
        <AppNavigation />

        <div id="hero" class="-mt-20 ">
            <HeroSection />
        </div>
        <ProblemSection class="" />
        <div id="solution">
            <SolutionSection />
        </div>
        <ProcessSection />
        <div id="use-cases">
            <UseCasesSection />
        </div>
        <TestimonialsSection />
        <div id="about">
            <TeamSection />
        </div>
        <TechStackSection />
        <ContactForm />
        <AppFooter />
    </div>
</template>
