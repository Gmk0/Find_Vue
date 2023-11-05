<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class FreelanceResourceData extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'nom' =>$this->nom,
            'prenom' => $this->prenom,
            'identifiant' => $this->identifiant,
            'description' => $this->description,
            'experience' =>$this->experience,
            'langue' =>$this->langue,
            'diplome' =>$this->diplome,
            'certificat' =>$this->certificat,
            'site' =>$this->site,
            'competences' =>$this->competences,
            'taux_journalier' =>$this->taux_journalier,
            'comptes' =>$this->comptes,
            'sub_categorie' =>$this->sub_categorie,
            'localisation' =>$this->localisation,
            'user' =>$this->user->only('name','email','profile_photo_url','profile_photo_path'),
            'category' =>$this->category->only('name'),
            'level' =>$this->level,
            'solde' =>$this->solde,
            'realisations' =>$this->realisations,
            'services' =>$this->services,
            'commande_encours'=> $this->countCommandeEncours(),
            'commande_realiser'=> $this->countCommandeFinis(),

            ];
    }
}
