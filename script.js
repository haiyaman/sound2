<script>
  var synth = new Tone.Synth().toMaster()
  var pad = document.getElementById('pad')
  var label = document.getElementById('label')
  var dragging = false

  function down(event) {
    dragging = true
    var x = event.pageX
    synth.triggerAttack(x)
    label.innerHTML = Math.round(x) + 'Hz'
  }
  function up(event) {
    dragging = false
    synth.triggerRelease()
    label.innerHTML = 'CLICK / DRAG'
  }
  function move(event) {
    if (dragging) {
      var x = event.pageX
      synth.setNote(x)
      label.innerHTML = Math.round(x) + 'Hz'
    }
  }

  pad.addEventListener('pointerdown', down)
  pad.addEventListener('pointerup', up)
  pad.addEventListener('pointermove', move)
</script>
