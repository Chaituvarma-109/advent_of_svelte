<script lang="ts">
    import { VisXYContainer, VisLine } from '@unovis/svelte'
    import type { HeartData } from './+page';

    export let data: HeartData[];
</script>

<div dir="rtl">
    <VisXYContainer {data} width={data.length * 10} height="40px" >
        <VisLine {data} color="#ff3352" x={(d) => new Date(d.time).getTime()} y={(d) => d.heartRate} duration={0}/>
    </VisXYContainer>
</div>
