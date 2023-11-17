<x-filament-panels::page>


@if($response !=null)
<div class="bg-orange-100 border-l-4 border-orange-500 text-orange-700 p-4" role="alert">
    <p class="font-bold">Message</p>
    <p>Vous avez deja postuler a cette mission.</p>
</div>

@endif


{{$this->missionINfo}}

{{$this->fichierForm}}






<form wire:submit.prevent='postuler'>

    {{$this->postulerForm}}

    @if($response !=null)

    <div class="text-center mt-4 p-4">
        <x-filament::button wire:click='changerPost()' type='button' class="align-center">
            <span>Changer<span>


        </x-filament::button>
    </div>
    @else
    <div class="text-center mt-4 p-4">
        <x-filament::button type="submit" form="submit" class="align-center">
            <span wire:loading.remove wire:target='postuler'>Postuler<span>
                    <span wire:loading wire:target='postuler'>Postulation...<span>

        </x-filament::button>
    </div>


    @endif


</form>


</x-filament-panels::page>
