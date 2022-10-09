var wavesurfer = WaveSurfer.create({
  container: '#waveform',
  waveColor: 'violet',
  progressColor: 'purple'
})
wavesurfer.load('audio.mp3')
wavesurfer.on('ready', function () {
  wavesurfer.play()
})
