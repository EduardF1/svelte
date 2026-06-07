<script>
    let { angle = 250 } = $props();
    let style = $derived(`conic-gradient(red ${angle}deg, blue 0);`);
</script>

<div style:background={style}>Test</div>
