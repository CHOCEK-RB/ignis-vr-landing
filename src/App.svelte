<script>
  import Navbar from './components/Navbar.svelte';
  import ScrollProgress from './components/ui/ScrollProgress.svelte';
  import Embers from './components/ui/Embers.svelte';
  import Hero from './components/Hero.svelte';
  import Premise from './components/Premise.svelte';
  import GameLoop from './components/GameLoop.svelte';
  import PlayerMechanics from './components/PlayerMechanics.svelte';
  import Arsenal from './components/Arsenal.svelte';
  import BossCombat from './components/BossCombat.svelte';
  import AudioVoices from './components/AudioVoices.svelte';
  import IdeationProcess from './components/IdeationProcess.svelte';
  import Story from './components/Story.svelte';
  import Characters from './components/Characters.svelte';
  import Videos from './components/Videos.svelte';
  import Testimonials from './components/Testimonials.svelte';
  import Gallery from './components/Gallery.svelte';
  import LifeAnalogies from './components/LifeAnalogies.svelte';
</script>

<div class="min-h-screen bg-[#07090e] text-slate-100 flex flex-col font-sans selection:bg-orange-500 selection:text-white">
  <ScrollProgress />
  <Navbar />
  <Embers />

  <main class="flex-1">
    <!-- ── 1 · EL JUEGO ─────────────────────────────────────── -->
    <Hero />
    <Premise />

    <!-- ── 2 · CÓMO SE JUEGA ────────────────────────────────── -->
    <GameLoop />
    <PlayerMechanics />
    <Arsenal />
    <BossCombat />
    <AudioVoices />

    <!-- ── 3 · CÓMO SE HIZO ─────────────────────────────────── -->
    <IdeationProcess />
    <Story />
    <Characters />

    <!-- ── 4 · MEDIA Y CIERRE ───────────────────────────────── -->
    <Videos />
    <Testimonials />
    <Gallery />
    <LifeAnalogies />
  </main>
</div>
