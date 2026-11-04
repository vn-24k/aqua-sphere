// Oceanic Procedural Audio Synthesizer via Native Web Audio API
// Generates deep abyssal resonant drone, procedural hydrophone sonar pings, and micro-bubble pops

class OceanicAudioEngine {
  private ctx: AudioContext | null = null;
  public isPlaying: boolean = false;
  private masterGain: GainNode | null = null;
  private ambientOsc1: OscillatorNode | null = null;
  private ambientOsc2: OscillatorNode | null = null;
  private filter: BiquadFilterNode | null = null;
  private sonarTimer: number | null = null;

  public async init() {
    const AudioCtx = window.AudioContext || (window as any).webkitAudioContext;
    if (!AudioCtx) return;
    this.ctx = new AudioCtx();
    this.masterGain = this.ctx.createGain();
    this.masterGain.gain.setValueAtTime(0.001, this.ctx.currentTime);
    this.masterGain.connect(this.ctx.destination);
  }

  public async start() {
    if (!this.ctx) await this.init();
    if (this.ctx && this.ctx.state === 'suspended') {
      await this.ctx.resume();
    }
    if (!this.ctx || !this.masterGain) return;

    // Master volume ramp up
    this.masterGain.gain.linearRampToValueAtTime(0.18, this.ctx.currentTime + 2);

    // Deep subaquatic drone (42Hz & 84Hz ocean swell)
    this.filter = this.ctx.createBiquadFilter();
    this.filter.type = 'lowpass';
    this.filter.frequency.setValueAtTime(140, this.ctx.currentTime);
    this.filter.connect(this.masterGain);

    this.ambientOsc1 = this.ctx.createOscillator();
    this.ambientOsc1.type = 'sine';
    this.ambientOsc1.frequency.setValueAtTime(42, this.ctx.currentTime);
    this.ambientOsc1.connect(this.filter);
    this.ambientOsc1.start();

    this.ambientOsc2 = this.ctx.createOscillator();
    this.ambientOsc2.type = 'triangle';
    this.ambientOsc2.frequency.setValueAtTime(84.4, this.ctx.currentTime);
    const osc2Gain = this.ctx.createGain();
    osc2Gain.gain.setValueAtTime(0.08, this.ctx.currentTime);
    this.ambientOsc2.connect(osc2Gain);
    osc2Gain.connect(this.filter);
    this.ambientOsc2.start();

    this.isPlaying = true;

    // Periodic sonar ping every 9 seconds
    this.scheduleSonar();
  }

  public stop() {
    if (this.ctx && this.masterGain) {
      this.masterGain.gain.linearRampToValueAtTime(0.001, this.ctx.currentTime + 1);
      setTimeout(() => {
        try {
          this.ambientOsc1?.stop();
          this.ambientOsc2?.stop();
          this.ambientOsc1?.disconnect();
          this.ambientOsc2?.disconnect();
        } catch (e) {}
      }, 1000);
    }
    if (this.sonarTimer) {
      window.clearInterval(this.sonarTimer);
      this.sonarTimer = null;
    }
    this.isPlaying = false;
  }

  public toggle(): boolean {
    if (this.isPlaying) {
      this.stop();
      return false;
    } else {
      this.start();
      return true;
    }
  }

  // Hydrophone Sonar Ping
  public playSonarPing() {
    if (!this.ctx || !this.isPlaying) return;
    try {
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      osc.frequency.setValueAtTime(1180, now);
      osc.frequency.exponentialRampToValueAtTime(940, now + 1.2);

      gain.gain.setValueAtTime(0.001, now);
      gain.gain.linearRampToValueAtTime(0.09, now + 0.05);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 2.4);

      osc.connect(gain);
      gain.connect(this.masterGain!);

      osc.start(now);
      osc.stop(now + 2.5);
    } catch (e) {}
  }

  // Micro bubble pop on interactive element hover
  public playBubblePop() {
    if (!this.ctx) return;
    try {
      if (this.ctx.state === 'suspended') {
        this.ctx.resume();
      }
      const now = this.ctx.currentTime;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'sine';
      // Pitch envelope from 400Hz up to 880Hz then down
      osc.frequency.setValueAtTime(450 + Math.random() * 200, now);
      osc.frequency.exponentialRampToValueAtTime(900 + Math.random() * 300, now + 0.06);

      gain.gain.setValueAtTime(0.05, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.12);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now);
      osc.stop(now + 0.13);
    } catch (e) {}
  }

  private scheduleSonar() {
    if (this.sonarTimer) window.clearInterval(this.sonarTimer);
    this.sonarTimer = window.setInterval(() => {
      if (this.isPlaying) {
        this.playSonarPing();
      }
    }, 9500);
  }
}

export const oceanAudio = new OceanicAudioEngine();
