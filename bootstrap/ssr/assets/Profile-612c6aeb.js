import { computed, ref, onMounted, resolveComponent, mergeProps, withCtx, openBlock, createBlock, createVNode, createTextVNode, unref, withDirectives, vShow, withModifiers, Fragment, renderList, toDisplayString, useSSRContext } from "vue";
import { ssrRenderAttrs, ssrRenderComponent, ssrRenderStyle, ssrRenderAttr, ssrRenderList, ssrInterpolate } from "vue/server-renderer";
import { _ as _sfc_main$1 } from "./FreelanceLayout-941c173b.js";
import TabView from "primevue/tabview/tabview.esm.js";
import TabPanel from "primevue/tabpanel/tabpanel.esm.js";
import { _ as _sfc_main$2 } from "./SecondaryButton-0974b11b.js";
import { S as SectionBorder } from "./SectionBorder-50fdc36f.js";
import { useForm, router } from "@inertiajs/vue3";
import { _ as _sfc_main$3 } from "./InputLabel-d47442f5.js";
import { useToast } from "primevue/usetoast/usetoast.esm.js";
import "./userInfo-1ade63c0.js";
import "pinia";
import "axios";
import "@vueuse/core";
import "./ResponsiveNavLink-79527a9d.js";
import "./MainSidebarF-0d2b34f4.js";
import "vue3-popper";
import "./_plugin-vue_export-helper-cc2b3d55.js";
const _sfc_main = /* @__PURE__ */ Object.assign({
  layout: _sfc_main$1
}, {
  __name: "Profile",
  __ssrInlineRender: true,
  props: {
    freelance: Object
  },
  setup(__props) {
    const props = __props;
    const toast = useToast();
    const freelance = computed(() => props.freelance);
    const educationModal = ref(false);
    const certfierModal = ref(false);
    const editCertificatioButton = ref(false);
    const certificationIndex = ref("");
    const langueModal = ref(false);
    const editLangueButton = ref(false);
    const langueIndex = ref("");
    const comptesModal = ref(false);
    const editCompteButton = ref(false);
    const compteIndex = ref("");
    const skillModal = ref(false);
    const editSkillButton = ref(false);
    const skillIndex = ref("");
    const editEducationButton = ref(false);
    const educationIndex = ref("");
    const educationModalReset = () => {
      educationModal.value = false;
      editEducationButton.value = false;
    };
    const certification = useForm({
      certifier: "",
      delivrer: "",
      annee: ""
    });
    const langueParler = useForm({
      langue: "",
      level: ""
    });
    const comptes = useForm({
      compte: "",
      lien: ""
    });
    const skillUser = useForm({
      skill: "",
      level: ""
    });
    const langueModalReset = () => {
      langueIndex.value = "";
      langueParler.reset();
      editLangueButton.value = false;
      langueModal.value = false;
    };
    const skillModalReset = () => {
      skillIndex.value = "";
      skillModal.value = false;
      editSkillButton.value = false;
      skillUser.reset();
    };
    const comptesModalReset = () => {
      comptes.reset();
      compteIndex.value = "";
      comptesModal.value = false;
      editCompteButton.value = false;
    };
    const addLangue = () => {
      langueParler.post(route("addLangue"), {
        onSuccess: () => {
          langueModalReset();
        },
        preserveScroll: true,
        onError: () => {
          langueParler.reset();
        }
      });
    };
    const addComptes = () => {
      comptes.post(route("addComptes"), {
        onSuccess: () => {
          comptes.reset();
          comptesModal.value = false;
        },
        preserveScroll: true,
        onError: (error) => {
          comptes.reset();
        }
      });
    };
    const addCompetences = () => {
      skillUser.post(route("addCompetences"), {
        onSuccess: () => {
          skillUser.reset();
          skillModal.value = false;
        },
        preserveScroll: true,
        onError: () => {
          skillUser.reset();
        }
      });
    };
    const addCertification = () => {
      certification.post(route("addCertification"), {
        onSuccess: () => {
          certification.reset();
          certfierModal.value = false;
        },
        preserveScroll: true,
        onError: () => {
          certification.reset();
        }
      });
    };
    const addEducation = () => {
      education.post(route("addEducation"), {
        onSuccess: () => {
          education.reset();
          educationModal.value = false;
        },
        preserveScroll: true,
        onError: () => {
          education.reset();
        }
      });
    };
    const education = useForm({
      diplome: "",
      universite: "",
      annee: ""
    });
    const ModifierEducation = (index) => {
      education.diplome = freelance.value.diplome[index]["diplome"];
      education.universite = freelance.value.diplome[index]["universite"];
      education.annee = freelance.value.diplome[index]["annee"];
      educationIndex.value = index;
      editEducationButton.value = true, // Définissez la propriété 'value' à true
      educationModal.value = true;
    };
    const ModifierCompetences = (index) => {
      skillUser.skill = freelance.value.competences[index]["skill"];
      skillUser.level = freelance.value.competences[index]["level"];
      skillIndex.value = index;
      skillModal.value = true;
      editSkillButton.value = true;
    };
    const ModifierComptes = (index) => {
      comptes.compte = freelance.value.comptes[index]["compte"];
      comptes.lien = freelance.value.comptes[index]["lien"];
      compteIndex.value = index;
      comptesModal.value = true;
      editCompteButton.value = true;
    };
    const ModifierLangue = (index) => {
      langueParler.langue = freelance.value.langue[index]["langue"];
      langueParler.level = freelance.value.langue[index]["level"];
      langueIndex.value = index;
      langueModal.value = true;
      editLangueButton.value = true;
    };
    const modifierSkillForm = () => {
      if (!skillUser.skill && !skillUser.level) {
        return false;
      }
      router.post(route("editCompetences"), {
        data: {
          skill: skillUser.skill,
          level: skillUser.level
        },
        index: skillIndex.value
      }, {
        onSuccess: () => {
          skillUser.reset();
          skillModal.value = false;
          skillIndex.value = "";
          editSkillButton.value = false;
        },
        preserveScroll: true,
        onError: () => {
          alert("Veuillez remplir tout les champs");
        }
      });
    };
    const modifierComptesForm = () => {
      router.post(route("editComptes"), {
        data: {
          compte: comptes.compte,
          lien: comptes.lien
        },
        index: compteIndex.value
      }, {
        onSuccess: () => {
          comptesModalReset();
        },
        preserveScroll: true,
        onError: (error) => {
          alert("Veuillez remplir tout les champs" + error.message);
        }
      });
    };
    const modifierLangueForm = () => {
      router.post(route("editLangue"), {
        data: {
          langue: langueParler.langue,
          level: langueParler.level
        },
        index: langueIndex.value
      }, {
        onSuccess: () => {
          langueModalReset();
        },
        preserveScroll: true,
        onError: (error) => {
          alert("Veuillez remplir tout les champs" + error.message);
        }
      });
    };
    const modifierEducationForm = () => {
      router.post(route("editEducation"), {
        data: {
          diplome: education.diplome,
          universite: education.universite,
          annee: education.annee
        },
        index: educationIndex.value
      }, {
        onSuccess: () => {
          education.reset();
          educationModal.value = false;
          educationIndex.value = "";
          editEducationButton.value = false;
        },
        preserveScroll: true,
        onError: () => {
          education.reset();
        }
      });
    };
    const modifierCertificationForm = () => {
      router.post(route("editCertification"), {
        data: {
          certifier: certification.certifier,
          delivrer: certification.delivrer,
          annee: certification.annee
        },
        index: certificationIndex.value
      }, {
        onSuccess: () => {
          certification.reset();
          certfierModal.value = false;
          certificationIndex.value = "";
          editCertificatioButton.value = false;
        },
        preserveScroll: true,
        onError: () => {
          education.reset();
        }
      });
    };
    const ModifierCertification = (index) => {
      certification.certifier = freelance.value.certificat[index]["certifier"];
      certification.delivrer = freelance.value.certificat[index]["delivrer"];
      certification.annee = freelance.value.certificat[index]["annee"];
      certificationIndex.value = index;
      editCertificatioButton.value = true;
      certfierModal.value = true;
    };
    const removeElement = (index, element) => {
      router.post(route("removeElement"), {
        element,
        index
      }, {
        onSuccess: () => {
        },
        onError: (error) => {
          alert(error.message);
        },
        preserveScroll: true
      });
    };
    const form = useForm({
      nom: props.freelance.nom,
      id: props.freelance.id,
      prenom: props.freelance.prenom,
      description: props.freelance.description,
      langue: props.freelance.langue,
      diplome: props.freelance.diplome,
      certificat: props.freelance.certificat,
      site: props.freelance.site,
      experience: props.freelance.experience,
      competences: props.freelance.competences,
      taux_journalier: props.freelance.taux_journalier,
      comptes: props.freelance.comptes,
      sub_categorie: props.freelance.sub_categorie,
      localisation: props.freelance.localisation,
      category_id: props.freelance.category_id,
      level: 1
    });
    const d = /* @__PURE__ */ new Date();
    let year = d.getFullYear();
    const anneeSelected = ref([]);
    for (let index = 1999; index < year; index++) {
      anneeSelected.value.push(index);
    }
    const changePart = () => {
      form.post(route("addProfilePartOne"), {
        onSuccess: () => {
          toast.add({ severity: "info", summary: "Message", detail: "Modification reussie", group: "br", life: 1e3 });
        },
        onError: (error) => {
          alert(error.message);
        }
      });
    };
    const experienceAnnee = ref([
      { name: "0 a 2 ans", id: "0-2 ans" },
      { name: "2 a 5 ans", id: "2-5 ans" },
      { name: "+ 7 ans", id: "+ 7 ans" }
    ]);
    const levelSelector = ref([
      { name: "Debutant", id: "Debutant" },
      { name: "intermediare", id: "intermediare" },
      { name: "Expert", id: "Expert" }
    ]);
    const comptesSelector = ref([
      { name: "twitter", code: "/images/logo/X.webp" },
      { name: "Facebook", code: "/images/logo/X.webp" },
      { name: "Tiktok", code: "/images/logo/tiktok.png" }
    ]);
    onMounted(() => {
      getWorldLanguages();
    });
    const languagesArray = ref([]);
    function getWorldLanguages() {
      return axios.get("https://restcountries.com/v3/all").then((response) => {
        const data = response.data;
        const uniqueLanguagesSet = /* @__PURE__ */ new Set();
        data.forEach((country) => {
          if (country.languages) {
            Object.entries(country.languages).forEach(([id, language]) => {
              uniqueLanguagesSet.add(language);
            });
          }
        });
        const uniqueLanguagesArray = Array.from(uniqueLanguagesSet).map((language) => ({
          language,
          name: language
          // Vous pouvez remplacer 'id' par le nom de la langue si vous le souhaitez
        }));
        languagesArray.value = uniqueLanguagesArray;
        console.log(languagesArray.value);
      }).catch((error) => {
        console.error("Erreur lors de la récupération des langues", error);
        languagesArray.value = [];
      });
    }
    const image = useForm({
      _method: "PUT",
      photo: null
    });
    const photoPreview = ref(null);
    const photoInput = ref(null);
    const selectNewPhoto = () => {
      photoInput.value.click();
    };
    const updatePhotoPreview = () => {
      const photo = photoInput.value.files[0];
      if (!photo)
        return;
      const reader = new FileReader();
      reader.onload = (e) => {
        photoPreview.value = e.target.result;
      };
      reader.readAsDataURL(photo);
      image.photo = photoInput.value.files[0];
      image.post(route("updateProfileUser"), {
        onSuccess: () => {
          console.log("La requête a réussi.");
        },
        onError: (errors) => {
          console.log("La requête a échoué avec des erreurs :", errors);
        },
        preserveScroll: true
      });
    };
    return (_ctx, _push, _parent, _attrs) => {
      const _component_Link = resolveComponent("Link");
      const _component_InputText = resolveComponent("InputText");
      const _component_InputError = resolveComponent("InputError");
      const _component_Dropdown = resolveComponent("Dropdown");
      const _component_Textarea = resolveComponent("Textarea");
      const _component_Button = resolveComponent("Button");
      const _component_Dialog = resolveComponent("Dialog");
      _push(`<div${ssrRenderAttrs(mergeProps({ class: "flex flex-col min-h-screen gap-6 px-4 md:p-6 md:max-w-7xl l px-auto bg-inherit" }, _attrs))}><div class="flex flex-col"><div><nav class="flex" aria-label="Breadcrumb"><ol class="inline-flex items-center space-x-1 md:space-x-3"><li class="inline-flex items-center">`);
      _push(ssrRenderComponent(_component_Link, {
        href: _ctx.route("freelance.dashboard"),
        class: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-white"
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<svg class="w-3 h-3 mr-2.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20"${_scopeId}><path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z"${_scopeId}></path></svg> Dashboard `);
          } else {
            return [
              (openBlock(), createBlock("svg", {
                class: "w-3 h-3 mr-2.5",
                "aria-hidden": "true",
                xmlns: "http://www.w3.org/2000/svg",
                fill: "currentColor",
                viewBox: "0 0 20 20"
              }, [
                createVNode("path", { d: "m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" })
              ])),
              createTextVNode(" Dashboard ")
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</li><li aria-current="page"><div class="flex items-center"><svg class="w-3 h-3 mx-1 text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10"><path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"></path></svg><span class="ml-1 text-sm font-medium text-gray-500 md:ml-2 dark:text-gray-400">Profile</span></div></li></ol></nav></div><h1 class="mt-4 text-3xl font-bold text-black dark:text-white">Profile</h1></div><div><div class="w-full">`);
      _push(ssrRenderComponent(unref(TabView), null, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(ssrRenderComponent(unref(TabPanel), { header: "Information" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="min-h-screen"${_scopeId2}><div class="flex items-center justify-center"${_scopeId2}><div class=""${_scopeId2}><div class=""${_scopeId2}><input type="file" class="hidden"${_scopeId2}><div style="${ssrRenderStyle(!photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId2}>`);
                  if (_ctx.$page.props.auth.user.profile_photo_path != null) {
                    _push3(`<img${ssrRenderAttr("src", "/storage/" + _ctx.$page.props.auth.user.profile_photo_path)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)} class="object-cover rounded-full w-28 h-28"${_scopeId2}>`);
                  } else {
                    _push3(`<img${ssrRenderAttr("src", _ctx.$page.props.auth.profile_photo_url)}${ssrRenderAttr("alt", _ctx.$page.props.auth.user.name)} class="object-cover rounded-full w-28 h-28"${_scopeId2}>`);
                  }
                  _push3(`</div><div style="${ssrRenderStyle(photoPreview.value ? null : { display: "none" })}" class="mt-2"${_scopeId2}><span class="block bg-center bg-no-repeat bg-cover rounded-full w-28 h-28" style="${ssrRenderStyle("background-image: url('" + photoPreview.value + "');")}"${_scopeId2}></span></div>`);
                  _push3(ssrRenderComponent(_sfc_main$2, {
                    class: "mt-2 mr-2",
                    type: "button",
                    onClick: selectNewPhoto
                  }, {
                    default: withCtx((_3, _push4, _parent4, _scopeId3) => {
                      if (_push4) {
                        _push4(` Changer `);
                      } else {
                        return [
                          createTextVNode(" Changer ")
                        ];
                      }
                    }),
                    _: 1
                  }, _parent3, _scopeId2));
                  _push3(`</div></div></div><form class="grid-cols-1 gap-4 lg:grid lg:grid-cols-3"${_scopeId2}><div class="w-full col-span-1 mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { value: "Nom" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputText, {
                    required: "",
                    modelValue: unref(form).nom,
                    "onUpdate:modelValue": ($event) => unref(form).nom = $event,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputError, {
                    message: unref(form).errors.nom
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="w-full mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { value: "Prenom" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputText, {
                    required: "",
                    modelValue: unref(form).prenom,
                    "onUpdate:modelValue": ($event) => unref(form).prenom = $event,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputError, {
                    message: unref(form).errors.prenom
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="mb-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { value: "Experience" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Dropdown, {
                    modelValue: unref(form).experience,
                    "onUpdate:modelValue": ($event) => unref(form).experience = $event,
                    options: experienceAnnee.value,
                    required: "",
                    optionValue: "id",
                    optionLabel: "name",
                    placeholder: "Experience",
                    class: "!w-full"
                  }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputError, {
                    message: unref(form).errors.experience
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div class="col-span-3 mb-4"${_scopeId2}><div class="grid gap-6 lg:grid-cols-3"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { value: "adresse" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputText, {
                    required: "",
                    modelValue: unref(form).localisation.addresse,
                    "onUpdate:modelValue": ($event) => unref(form).localisation.addresse = $event,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { value: "commune" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputText, {
                    required: "",
                    modelValue: unref(form).localisation.commune,
                    "onUpdate:modelValue": ($event) => unref(form).localisation.commune = $event,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { value: "ville" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_InputText, {
                    required: "",
                    modelValue: unref(form).localisation.ville,
                    "onUpdate:modelValue": ($event) => unref(form).localisation.ville = $event,
                    class: "w-full"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><div class="col-span-3"${_scopeId2}><div${_scopeId2}>`);
                  _push3(ssrRenderComponent(_sfc_main$3, { value: "Description" }, null, _parent3, _scopeId2));
                  _push3(ssrRenderComponent(_component_Textarea, {
                    class: "w-full",
                    required: "",
                    modelValue: unref(form).description,
                    "onUpdate:modelValue": ($event) => unref(form).description = $event
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><div class="flex items-center justify-center col-span-3"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    type: "submit",
                    label: "Modifier"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></form></div>`);
                } else {
                  return [
                    createVNode("div", { class: "min-h-screen" }, [
                      createVNode("div", { class: "flex items-center justify-center" }, [
                        createVNode("div", { class: "" }, [
                          createVNode("div", { class: "" }, [
                            createVNode("input", {
                              ref_key: "photoInput",
                              ref: photoInput,
                              type: "file",
                              class: "hidden",
                              onChange: updatePhotoPreview
                            }, null, 544),
                            withDirectives(createVNode("div", { class: "mt-2" }, [
                              _ctx.$page.props.auth.user.profile_photo_path != null ? (openBlock(), createBlock("img", {
                                key: 0,
                                src: "/storage/" + _ctx.$page.props.auth.user.profile_photo_path,
                                alt: _ctx.$page.props.auth.user.name,
                                class: "object-cover rounded-full w-28 h-28"
                              }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                                key: 1,
                                src: _ctx.$page.props.auth.profile_photo_url,
                                alt: _ctx.$page.props.auth.user.name,
                                class: "object-cover rounded-full w-28 h-28"
                              }, null, 8, ["src", "alt"]))
                            ], 512), [
                              [vShow, !photoPreview.value]
                            ]),
                            withDirectives(createVNode("div", { class: "mt-2" }, [
                              createVNode("span", {
                                class: "block bg-center bg-no-repeat bg-cover rounded-full w-28 h-28",
                                style: "background-image: url('" + photoPreview.value + "');"
                              }, null, 4)
                            ], 512), [
                              [vShow, photoPreview.value]
                            ]),
                            createVNode(_sfc_main$2, {
                              class: "mt-2 mr-2",
                              type: "button",
                              onClick: withModifiers(selectNewPhoto, ["prevent"])
                            }, {
                              default: withCtx(() => [
                                createTextVNode(" Changer ")
                              ]),
                              _: 1
                            }, 8, ["onClick"])
                          ])
                        ])
                      ]),
                      createVNode("form", {
                        onSubmit: withModifiers(changePart, ["prevent"]),
                        class: "grid-cols-1 gap-4 lg:grid lg:grid-cols-3"
                      }, [
                        createVNode("div", { class: "w-full col-span-1 mb-4" }, [
                          createVNode(_sfc_main$3, { value: "Nom" }),
                          createVNode(_component_InputText, {
                            required: "",
                            modelValue: unref(form).nom,
                            "onUpdate:modelValue": ($event) => unref(form).nom = $event,
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_InputError, {
                            message: unref(form).errors.nom
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "w-full mb-4" }, [
                          createVNode(_sfc_main$3, { value: "Prenom" }),
                          createVNode(_component_InputText, {
                            required: "",
                            modelValue: unref(form).prenom,
                            "onUpdate:modelValue": ($event) => unref(form).prenom = $event,
                            class: "w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                          createVNode(_component_InputError, {
                            message: unref(form).errors.prenom
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "mb-4" }, [
                          createVNode(_sfc_main$3, { value: "Experience" }),
                          createVNode(_component_Dropdown, {
                            modelValue: unref(form).experience,
                            "onUpdate:modelValue": ($event) => unref(form).experience = $event,
                            options: experienceAnnee.value,
                            required: "",
                            optionValue: "id",
                            optionLabel: "name",
                            placeholder: "Experience",
                            class: "!w-full"
                          }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                          createVNode(_component_InputError, {
                            message: unref(form).errors.experience
                          }, null, 8, ["message"])
                        ]),
                        createVNode("div", { class: "col-span-3 mb-4" }, [
                          createVNode("div", { class: "grid gap-6 lg:grid-cols-3" }, [
                            createVNode("div", null, [
                              createVNode(_sfc_main$3, { value: "adresse" }),
                              createVNode(_component_InputText, {
                                required: "",
                                modelValue: unref(form).localisation.addresse,
                                "onUpdate:modelValue": ($event) => unref(form).localisation.addresse = $event,
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode(_sfc_main$3, { value: "commune" }),
                              createVNode(_component_InputText, {
                                required: "",
                                modelValue: unref(form).localisation.commune,
                                "onUpdate:modelValue": ($event) => unref(form).localisation.commune = $event,
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ]),
                            createVNode("div", null, [
                              createVNode(_sfc_main$3, { value: "ville" }),
                              createVNode(_component_InputText, {
                                required: "",
                                modelValue: unref(form).localisation.ville,
                                "onUpdate:modelValue": ($event) => unref(form).localisation.ville = $event,
                                class: "w-full"
                              }, null, 8, ["modelValue", "onUpdate:modelValue"])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "col-span-3" }, [
                          createVNode("div", null, [
                            createVNode(_sfc_main$3, { value: "Description" }),
                            createVNode(_component_Textarea, {
                              class: "w-full",
                              required: "",
                              modelValue: unref(form).description,
                              "onUpdate:modelValue": ($event) => unref(form).description = $event
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-center col-span-3" }, [
                          createVNode(_component_Button, {
                            type: "submit",
                            label: "Modifier"
                          })
                        ])
                      ], 40, ["onSubmit"])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(ssrRenderComponent(unref(TabPanel), { header: "Diplome & Certificat" }, {
              default: withCtx((_2, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="col-span-3 px-4"${_scopeId2}><div class="flex flex-col mb-6"${_scopeId2}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId2}><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"${_scopeId2}><div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"${_scopeId2}><table class="min-w-full divide-y divide-gray-200"${_scopeId2}><thead class="bg-gray-50 dark:bg-gray-800"${_scopeId2}><tr${_scopeId2}><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Diplomee En </th><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Universite </th><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Annee </th><th scope="col" class="relative px-6 py-3"${_scopeId2}></th></tr></thead><tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900"${_scopeId2}><!--[-->`);
                  ssrRenderList(freelance.value.diplome, (educ, index) => {
                    _push3(`<tr${_scopeId2}><td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(educ["diplome"])}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(educ["universite"])}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(educ["annee"])}</td><td class="flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}><button class="btn btn-sm btn-circle btn-outline"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"${_scopeId2}></path></svg></button><button class="btn btn-sm btn-circle btn-outline"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId2}></path></svg></button></td></tr>`);
                  });
                  _push3(`<!--]--></tbody></table></div></div></div><div class="flex items-center justify-center mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    onClick: ($event) => educationModal.value = !educationModal.value,
                    outlined: "",
                    size: "small",
                    label: "Ajouter"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div></div><hr${_scopeId2}>`);
                  _push3(ssrRenderComponent(SectionBorder, null, null, _parent3, _scopeId2));
                  _push3(`<div class="flex flex-col mt-6 mb-6"${_scopeId2}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId2}><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"${_scopeId2}><div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"${_scopeId2}><table class="min-w-full divide-y divide-gray-200"${_scopeId2}><thead class="bg-gray-50 dark:bg-gray-800"${_scopeId2}><tr${_scopeId2}><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Certifier En </th><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Delivrer par </th><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Annee </th><th scope="col" class="relative px-6 py-3"${_scopeId2}></th></tr></thead><tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900"${_scopeId2}><!--[-->`);
                  ssrRenderList(freelance.value.certificat, (certif, index) => {
                    _push3(`<tr${_scopeId2}><td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(certif["certifier"])}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(certif["delivrer"])}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(certif["annee"])}</td><td class="flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}><button class="btn btn-sm btn-circle btn-outline"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"${_scopeId2}></path></svg></button><button class="btn btn-sm btn-circle btn-outline"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId2}></path></svg></button></td></tr>`);
                  });
                  _push3(`<!--]--></tbody></table></div></div></div><div class="flex items-center justify-center mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    size: "small",
                    onClick: ($event) => certfierModal.value = !certfierModal.value,
                    outlined: "",
                    label: "Ajouter"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><hr${_scopeId2}><div class="flex flex-col mt-6 mb-6"${_scopeId2}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId2}><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"${_scopeId2}><div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"${_scopeId2}><table class="min-w-full divide-y divide-gray-200"${_scopeId2}><thead class="bg-gray-50 dark:bg-gray-800"${_scopeId2}><tr${_scopeId2}><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Langue parler </th><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Niveau </th><th scope="col" class="relative px-6 py-3"${_scopeId2}></th></tr></thead><tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900"${_scopeId2}><!--[-->`);
                  ssrRenderList(freelance.value.langue, (lang, index) => {
                    _push3(`<tr${_scopeId2}><td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(lang["langue"])}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(lang["level"])}</td><td class="flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}><button class="btn btn-sm btn-circle btn-outline"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"${_scopeId2}></path></svg></button><button class="btn btn-sm btn-circle btn-outline"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId2}></path></svg></button></td></tr>`);
                  });
                  _push3(`<!--]--></tbody></table></div></div></div><div class="flex items-center justify-center mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    size: "small",
                    onClick: ($event) => langueModal.value = !langueModal.value,
                    outlined: "",
                    label: "Ajouter"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><hr${_scopeId2}><div class="flex flex-col mt-6 mb-6"${_scopeId2}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId2}><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"${_scopeId2}><div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"${_scopeId2}><table class="min-w-full divide-y divide-gray-200"${_scopeId2}><thead class="bg-gray-50 dark:bg-gray-800"${_scopeId2}><tr${_scopeId2}><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Compte </th><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Lien </th><th scope="col" class="relative px-6 py-3"${_scopeId2}></th></tr></thead><tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900"${_scopeId2}><!--[-->`);
                  ssrRenderList(freelance.value.comptes, (compt, index) => {
                    _push3(`<tr${_scopeId2}><td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(compt["compte"])}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(compt["lien"])}</td><td class="flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}><button class="btn btn-sm btn-circle btn-outline"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"${_scopeId2}></path></svg></button><button class="btn btn-sm btn-circle btn-outline"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId2}></path></svg></button></td></tr>`);
                  });
                  _push3(`<!--]--></tbody></table></div></div></div><div class="flex items-center justify-center mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    size: "small",
                    onClick: ($event) => comptesModal.value = !comptesModal.value,
                    outlined: "",
                    label: "Ajouter"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div><hr${_scopeId2}><div class="flex flex-col mt-6 mb-6"${_scopeId2}><div class="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8"${_scopeId2}><div class="inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8"${_scopeId2}><div class="overflow-hidden border-b border-gray-200 shadow sm:rounded-lg"${_scopeId2}><table class="min-w-full divide-y divide-gray-200"${_scopeId2}><thead class="bg-gray-50 dark:bg-gray-800"${_scopeId2}><tr${_scopeId2}><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Competences </th><th scope="col" class="px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"${_scopeId2}> Niveau </th><th scope="col" class="relative px-6 py-3"${_scopeId2}></th></tr></thead><tbody class="bg-white divide-y divide-gray-200 dark:bg-gray-900"${_scopeId2}><!--[-->`);
                  ssrRenderList(freelance.value.competences, (skill, index) => {
                    _push3(`<tr${_scopeId2}><td class="px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(skill["skill"])}</td><td class="px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}>${ssrInterpolate(skill["level"])}</td><td class="flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap"${_scopeId2}><button class="btn btn-sm btn-circle btn-outline"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-5 h-5"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"${_scopeId2}></path></svg></button><button class="btn btn-sm btn-circle btn-outline"${_scopeId2}><svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"${_scopeId2}><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"${_scopeId2}></path></svg></button></td></tr>`);
                  });
                  _push3(`<!--]--></tbody></table></div></div></div><div class="flex items-center justify-center mt-4"${_scopeId2}>`);
                  _push3(ssrRenderComponent(_component_Button, {
                    size: "small",
                    onClick: ($event) => skillModal.value = !skillModal.value,
                    outlined: "",
                    label: "Ajouter"
                  }, null, _parent3, _scopeId2));
                  _push3(`</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "col-span-3 px-4" }, [
                      createVNode("div", { class: "flex flex-col mb-6" }, [
                        createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                          createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                            createVNode("div", { class: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" }, [
                              createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                                createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800" }, [
                                  createVNode("tr", null, [
                                    createVNode("th", {
                                      scope: "col",
                                      class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    }, " Diplomee En "),
                                    createVNode("th", {
                                      scope: "col",
                                      class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    }, " Universite "),
                                    createVNode("th", {
                                      scope: "col",
                                      class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                    }, " Annee "),
                                    createVNode("th", {
                                      scope: "col",
                                      class: "relative px-6 py-3"
                                    })
                                  ])
                                ]),
                                createVNode("tbody", { class: "bg-white divide-y divide-gray-200 dark:bg-gray-900" }, [
                                  (openBlock(true), createBlock(Fragment, null, renderList(freelance.value.diplome, (educ, index) => {
                                    return openBlock(), createBlock("tr", null, [
                                      createVNode("td", { class: "px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(educ["diplome"]), 1),
                                      createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(educ["universite"]), 1),
                                      createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(educ["annee"]), 1),
                                      createVNode("td", { class: "flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, [
                                        createVNode("button", {
                                          onClick: ($event) => ModifierEducation(index),
                                          class: "btn btn-sm btn-circle btn-outline"
                                        }, [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            "stroke-width": "1.5",
                                            stroke: "currentColor",
                                            class: "w-5 h-5"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                            })
                                          ]))
                                        ], 8, ["onClick"]),
                                        createVNode("button", {
                                          onClick: ($event) => removeElement(index, "education"),
                                          class: "btn btn-sm btn-circle btn-outline"
                                        }, [
                                          (openBlock(), createBlock("svg", {
                                            xmlns: "http://www.w3.org/2000/svg",
                                            class: "w-5 h-5",
                                            fill: "none",
                                            viewBox: "0 0 24 24",
                                            stroke: "currentColor"
                                          }, [
                                            createVNode("path", {
                                              "stroke-linecap": "round",
                                              "stroke-linejoin": "round",
                                              "stroke-width": "2",
                                              d: "M6 18L18 6M6 6l12 12"
                                            })
                                          ]))
                                        ], 8, ["onClick"])
                                      ])
                                    ]);
                                  }), 256))
                                ])
                              ])
                            ])
                          ])
                        ]),
                        createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                          createVNode(_component_Button, {
                            onClick: ($event) => educationModal.value = !educationModal.value,
                            outlined: "",
                            size: "small",
                            label: "Ajouter"
                          }, null, 8, ["onClick"])
                        ])
                      ])
                    ]),
                    createVNode("hr"),
                    createVNode(SectionBorder),
                    createVNode("div", { class: "flex flex-col mt-6 mb-6" }, [
                      createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                        createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                          createVNode("div", { class: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" }, [
                            createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                              createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800" }, [
                                createVNode("tr", null, [
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Certifier En "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Delivrer par "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Annee "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "relative px-6 py-3"
                                  })
                                ])
                              ]),
                              createVNode("tbody", { class: "bg-white divide-y divide-gray-200 dark:bg-gray-900" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(freelance.value.certificat, (certif, index) => {
                                  return openBlock(), createBlock("tr", null, [
                                    createVNode("td", { class: "px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(certif["certifier"]), 1),
                                    createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(certif["delivrer"]), 1),
                                    createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(certif["annee"]), 1),
                                    createVNode("td", { class: "flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, [
                                      createVNode("button", {
                                        onClick: ($event) => ModifierCertification(index),
                                        class: "btn btn-sm btn-circle btn-outline"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          "stroke-width": "1.5",
                                          stroke: "currentColor",
                                          class: "w-5 h-5"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                          })
                                        ]))
                                      ], 8, ["onClick"]),
                                      createVNode("button", {
                                        onClick: ($event) => removeElement(index, "certification"),
                                        class: "btn btn-sm btn-circle btn-outline"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          class: "w-5 h-5",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                          })
                                        ]))
                                      ], 8, ["onClick"])
                                    ])
                                  ]);
                                }), 256))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                        createVNode(_component_Button, {
                          size: "small",
                          onClick: ($event) => certfierModal.value = !certfierModal.value,
                          outlined: "",
                          label: "Ajouter"
                        }, null, 8, ["onClick"])
                      ])
                    ]),
                    createVNode("hr"),
                    createVNode("div", { class: "flex flex-col mt-6 mb-6" }, [
                      createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                        createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                          createVNode("div", { class: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" }, [
                            createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                              createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800" }, [
                                createVNode("tr", null, [
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Langue parler "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Niveau "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "relative px-6 py-3"
                                  })
                                ])
                              ]),
                              createVNode("tbody", { class: "bg-white divide-y divide-gray-200 dark:bg-gray-900" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(freelance.value.langue, (lang, index) => {
                                  return openBlock(), createBlock("tr", null, [
                                    createVNode("td", { class: "px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(lang["langue"]), 1),
                                    createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(lang["level"]), 1),
                                    createVNode("td", { class: "flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, [
                                      createVNode("button", {
                                        onClick: ($event) => ModifierLangue(index),
                                        class: "btn btn-sm btn-circle btn-outline"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          "stroke-width": "1.5",
                                          stroke: "currentColor",
                                          class: "w-5 h-5"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                          })
                                        ]))
                                      ], 8, ["onClick"]),
                                      createVNode("button", {
                                        onClick: ($event) => removeElement(index, "langue"),
                                        class: "btn btn-sm btn-circle btn-outline"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          class: "w-5 h-5",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                          })
                                        ]))
                                      ], 8, ["onClick"])
                                    ])
                                  ]);
                                }), 256))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                        createVNode(_component_Button, {
                          size: "small",
                          onClick: ($event) => langueModal.value = !langueModal.value,
                          outlined: "",
                          label: "Ajouter"
                        }, null, 8, ["onClick"])
                      ])
                    ]),
                    createVNode("hr"),
                    createVNode("div", { class: "flex flex-col mt-6 mb-6" }, [
                      createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                        createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                          createVNode("div", { class: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" }, [
                            createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                              createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800" }, [
                                createVNode("tr", null, [
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Compte "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Lien "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "relative px-6 py-3"
                                  })
                                ])
                              ]),
                              createVNode("tbody", { class: "bg-white divide-y divide-gray-200 dark:bg-gray-900" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(freelance.value.comptes, (compt, index) => {
                                  return openBlock(), createBlock("tr", null, [
                                    createVNode("td", { class: "px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(compt["compte"]), 1),
                                    createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(compt["lien"]), 1),
                                    createVNode("td", { class: "flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, [
                                      createVNode("button", {
                                        onClick: ($event) => ModifierComptes(index),
                                        class: "btn btn-sm btn-circle btn-outline"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          "stroke-width": "1.5",
                                          stroke: "currentColor",
                                          class: "w-5 h-5"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                          })
                                        ]))
                                      ], 8, ["onClick"]),
                                      createVNode("button", {
                                        onClick: ($event) => removeElement(index, "comptes"),
                                        class: "btn btn-sm btn-circle btn-outline"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          class: "w-5 h-5",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                          })
                                        ]))
                                      ], 8, ["onClick"])
                                    ])
                                  ]);
                                }), 256))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                        createVNode(_component_Button, {
                          size: "small",
                          onClick: ($event) => comptesModal.value = !comptesModal.value,
                          outlined: "",
                          label: "Ajouter"
                        }, null, 8, ["onClick"])
                      ])
                    ]),
                    createVNode("hr"),
                    createVNode("div", { class: "flex flex-col mt-6 mb-6" }, [
                      createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                        createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                          createVNode("div", { class: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" }, [
                            createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                              createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800" }, [
                                createVNode("tr", null, [
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Competences "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Niveau "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "relative px-6 py-3"
                                  })
                                ])
                              ]),
                              createVNode("tbody", { class: "bg-white divide-y divide-gray-200 dark:bg-gray-900" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(freelance.value.competences, (skill, index) => {
                                  return openBlock(), createBlock("tr", null, [
                                    createVNode("td", { class: "px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(skill["skill"]), 1),
                                    createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(skill["level"]), 1),
                                    createVNode("td", { class: "flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, [
                                      createVNode("button", {
                                        onClick: ($event) => ModifierCompetences(index),
                                        class: "btn btn-sm btn-circle btn-outline"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          "stroke-width": "1.5",
                                          stroke: "currentColor",
                                          class: "w-5 h-5"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                          })
                                        ]))
                                      ], 8, ["onClick"]),
                                      createVNode("button", {
                                        onClick: ($event) => removeElement(index, "competences"),
                                        class: "btn btn-sm btn-circle btn-outline"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          class: "w-5 h-5",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                          })
                                        ]))
                                      ], 8, ["onClick"])
                                    ])
                                  ]);
                                }), 256))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                        createVNode(_component_Button, {
                          size: "small",
                          onClick: ($event) => skillModal.value = !skillModal.value,
                          outlined: "",
                          label: "Ajouter"
                        }, null, 8, ["onClick"])
                      ])
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
          } else {
            return [
              createVNode(unref(TabPanel), { header: "Information" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "min-h-screen" }, [
                    createVNode("div", { class: "flex items-center justify-center" }, [
                      createVNode("div", { class: "" }, [
                        createVNode("div", { class: "" }, [
                          createVNode("input", {
                            ref_key: "photoInput",
                            ref: photoInput,
                            type: "file",
                            class: "hidden",
                            onChange: updatePhotoPreview
                          }, null, 544),
                          withDirectives(createVNode("div", { class: "mt-2" }, [
                            _ctx.$page.props.auth.user.profile_photo_path != null ? (openBlock(), createBlock("img", {
                              key: 0,
                              src: "/storage/" + _ctx.$page.props.auth.user.profile_photo_path,
                              alt: _ctx.$page.props.auth.user.name,
                              class: "object-cover rounded-full w-28 h-28"
                            }, null, 8, ["src", "alt"])) : (openBlock(), createBlock("img", {
                              key: 1,
                              src: _ctx.$page.props.auth.profile_photo_url,
                              alt: _ctx.$page.props.auth.user.name,
                              class: "object-cover rounded-full w-28 h-28"
                            }, null, 8, ["src", "alt"]))
                          ], 512), [
                            [vShow, !photoPreview.value]
                          ]),
                          withDirectives(createVNode("div", { class: "mt-2" }, [
                            createVNode("span", {
                              class: "block bg-center bg-no-repeat bg-cover rounded-full w-28 h-28",
                              style: "background-image: url('" + photoPreview.value + "');"
                            }, null, 4)
                          ], 512), [
                            [vShow, photoPreview.value]
                          ]),
                          createVNode(_sfc_main$2, {
                            class: "mt-2 mr-2",
                            type: "button",
                            onClick: withModifiers(selectNewPhoto, ["prevent"])
                          }, {
                            default: withCtx(() => [
                              createTextVNode(" Changer ")
                            ]),
                            _: 1
                          }, 8, ["onClick"])
                        ])
                      ])
                    ]),
                    createVNode("form", {
                      onSubmit: withModifiers(changePart, ["prevent"]),
                      class: "grid-cols-1 gap-4 lg:grid lg:grid-cols-3"
                    }, [
                      createVNode("div", { class: "w-full col-span-1 mb-4" }, [
                        createVNode(_sfc_main$3, { value: "Nom" }),
                        createVNode(_component_InputText, {
                          required: "",
                          modelValue: unref(form).nom,
                          "onUpdate:modelValue": ($event) => unref(form).nom = $event,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_InputError, {
                          message: unref(form).errors.nom
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "w-full mb-4" }, [
                        createVNode(_sfc_main$3, { value: "Prenom" }),
                        createVNode(_component_InputText, {
                          required: "",
                          modelValue: unref(form).prenom,
                          "onUpdate:modelValue": ($event) => unref(form).prenom = $event,
                          class: "w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue"]),
                        createVNode(_component_InputError, {
                          message: unref(form).errors.prenom
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "mb-4" }, [
                        createVNode(_sfc_main$3, { value: "Experience" }),
                        createVNode(_component_Dropdown, {
                          modelValue: unref(form).experience,
                          "onUpdate:modelValue": ($event) => unref(form).experience = $event,
                          options: experienceAnnee.value,
                          required: "",
                          optionValue: "id",
                          optionLabel: "name",
                          placeholder: "Experience",
                          class: "!w-full"
                        }, null, 8, ["modelValue", "onUpdate:modelValue", "options"]),
                        createVNode(_component_InputError, {
                          message: unref(form).errors.experience
                        }, null, 8, ["message"])
                      ]),
                      createVNode("div", { class: "col-span-3 mb-4" }, [
                        createVNode("div", { class: "grid gap-6 lg:grid-cols-3" }, [
                          createVNode("div", null, [
                            createVNode(_sfc_main$3, { value: "adresse" }),
                            createVNode(_component_InputText, {
                              required: "",
                              modelValue: unref(form).localisation.addresse,
                              "onUpdate:modelValue": ($event) => unref(form).localisation.addresse = $event,
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode(_sfc_main$3, { value: "commune" }),
                            createVNode(_component_InputText, {
                              required: "",
                              modelValue: unref(form).localisation.commune,
                              "onUpdate:modelValue": ($event) => unref(form).localisation.commune = $event,
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ]),
                          createVNode("div", null, [
                            createVNode(_sfc_main$3, { value: "ville" }),
                            createVNode(_component_InputText, {
                              required: "",
                              modelValue: unref(form).localisation.ville,
                              "onUpdate:modelValue": ($event) => unref(form).localisation.ville = $event,
                              class: "w-full"
                            }, null, 8, ["modelValue", "onUpdate:modelValue"])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "col-span-3" }, [
                        createVNode("div", null, [
                          createVNode(_sfc_main$3, { value: "Description" }),
                          createVNode(_component_Textarea, {
                            class: "w-full",
                            required: "",
                            modelValue: unref(form).description,
                            "onUpdate:modelValue": ($event) => unref(form).description = $event
                          }, null, 8, ["modelValue", "onUpdate:modelValue"])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center col-span-3" }, [
                        createVNode(_component_Button, {
                          type: "submit",
                          label: "Modifier"
                        })
                      ])
                    ], 40, ["onSubmit"])
                  ])
                ]),
                _: 1
              }),
              createVNode(unref(TabPanel), { header: "Diplome & Certificat" }, {
                default: withCtx(() => [
                  createVNode("div", { class: "col-span-3 px-4" }, [
                    createVNode("div", { class: "flex flex-col mb-6" }, [
                      createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                        createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                          createVNode("div", { class: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" }, [
                            createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                              createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800" }, [
                                createVNode("tr", null, [
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Diplomee En "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Universite "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                  }, " Annee "),
                                  createVNode("th", {
                                    scope: "col",
                                    class: "relative px-6 py-3"
                                  })
                                ])
                              ]),
                              createVNode("tbody", { class: "bg-white divide-y divide-gray-200 dark:bg-gray-900" }, [
                                (openBlock(true), createBlock(Fragment, null, renderList(freelance.value.diplome, (educ, index) => {
                                  return openBlock(), createBlock("tr", null, [
                                    createVNode("td", { class: "px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(educ["diplome"]), 1),
                                    createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(educ["universite"]), 1),
                                    createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(educ["annee"]), 1),
                                    createVNode("td", { class: "flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, [
                                      createVNode("button", {
                                        onClick: ($event) => ModifierEducation(index),
                                        class: "btn btn-sm btn-circle btn-outline"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          "stroke-width": "1.5",
                                          stroke: "currentColor",
                                          class: "w-5 h-5"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                          })
                                        ]))
                                      ], 8, ["onClick"]),
                                      createVNode("button", {
                                        onClick: ($event) => removeElement(index, "education"),
                                        class: "btn btn-sm btn-circle btn-outline"
                                      }, [
                                        (openBlock(), createBlock("svg", {
                                          xmlns: "http://www.w3.org/2000/svg",
                                          class: "w-5 h-5",
                                          fill: "none",
                                          viewBox: "0 0 24 24",
                                          stroke: "currentColor"
                                        }, [
                                          createVNode("path", {
                                            "stroke-linecap": "round",
                                            "stroke-linejoin": "round",
                                            "stroke-width": "2",
                                            d: "M6 18L18 6M6 6l12 12"
                                          })
                                        ]))
                                      ], 8, ["onClick"])
                                    ])
                                  ]);
                                }), 256))
                              ])
                            ])
                          ])
                        ])
                      ]),
                      createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                        createVNode(_component_Button, {
                          onClick: ($event) => educationModal.value = !educationModal.value,
                          outlined: "",
                          size: "small",
                          label: "Ajouter"
                        }, null, 8, ["onClick"])
                      ])
                    ])
                  ]),
                  createVNode("hr"),
                  createVNode(SectionBorder),
                  createVNode("div", { class: "flex flex-col mt-6 mb-6" }, [
                    createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                      createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                        createVNode("div", { class: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" }, [
                          createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                            createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800" }, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                }, " Certifier En "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                }, " Delivrer par "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                }, " Annee "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "relative px-6 py-3"
                                })
                              ])
                            ]),
                            createVNode("tbody", { class: "bg-white divide-y divide-gray-200 dark:bg-gray-900" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(freelance.value.certificat, (certif, index) => {
                                return openBlock(), createBlock("tr", null, [
                                  createVNode("td", { class: "px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(certif["certifier"]), 1),
                                  createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(certif["delivrer"]), 1),
                                  createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(certif["annee"]), 1),
                                  createVNode("td", { class: "flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, [
                                    createVNode("button", {
                                      onClick: ($event) => ModifierCertification(index),
                                      class: "btn btn-sm btn-circle btn-outline"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "currentColor",
                                        class: "w-5 h-5"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        })
                                      ]))
                                    ], 8, ["onClick"]),
                                    createVNode("button", {
                                      onClick: ($event) => removeElement(index, "certification"),
                                      class: "btn btn-sm btn-circle btn-outline"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        class: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M6 18L18 6M6 6l12 12"
                                        })
                                      ]))
                                    ], 8, ["onClick"])
                                  ])
                                ]);
                              }), 256))
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                      createVNode(_component_Button, {
                        size: "small",
                        onClick: ($event) => certfierModal.value = !certfierModal.value,
                        outlined: "",
                        label: "Ajouter"
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  createVNode("hr"),
                  createVNode("div", { class: "flex flex-col mt-6 mb-6" }, [
                    createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                      createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                        createVNode("div", { class: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" }, [
                          createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                            createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800" }, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                }, " Langue parler "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                }, " Niveau "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "relative px-6 py-3"
                                })
                              ])
                            ]),
                            createVNode("tbody", { class: "bg-white divide-y divide-gray-200 dark:bg-gray-900" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(freelance.value.langue, (lang, index) => {
                                return openBlock(), createBlock("tr", null, [
                                  createVNode("td", { class: "px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(lang["langue"]), 1),
                                  createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(lang["level"]), 1),
                                  createVNode("td", { class: "flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, [
                                    createVNode("button", {
                                      onClick: ($event) => ModifierLangue(index),
                                      class: "btn btn-sm btn-circle btn-outline"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "currentColor",
                                        class: "w-5 h-5"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        })
                                      ]))
                                    ], 8, ["onClick"]),
                                    createVNode("button", {
                                      onClick: ($event) => removeElement(index, "langue"),
                                      class: "btn btn-sm btn-circle btn-outline"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        class: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M6 18L18 6M6 6l12 12"
                                        })
                                      ]))
                                    ], 8, ["onClick"])
                                  ])
                                ]);
                              }), 256))
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                      createVNode(_component_Button, {
                        size: "small",
                        onClick: ($event) => langueModal.value = !langueModal.value,
                        outlined: "",
                        label: "Ajouter"
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  createVNode("hr"),
                  createVNode("div", { class: "flex flex-col mt-6 mb-6" }, [
                    createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                      createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                        createVNode("div", { class: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" }, [
                          createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                            createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800" }, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                }, " Compte "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                }, " Lien "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "relative px-6 py-3"
                                })
                              ])
                            ]),
                            createVNode("tbody", { class: "bg-white divide-y divide-gray-200 dark:bg-gray-900" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(freelance.value.comptes, (compt, index) => {
                                return openBlock(), createBlock("tr", null, [
                                  createVNode("td", { class: "px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(compt["compte"]), 1),
                                  createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(compt["lien"]), 1),
                                  createVNode("td", { class: "flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, [
                                    createVNode("button", {
                                      onClick: ($event) => ModifierComptes(index),
                                      class: "btn btn-sm btn-circle btn-outline"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "currentColor",
                                        class: "w-5 h-5"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        })
                                      ]))
                                    ], 8, ["onClick"]),
                                    createVNode("button", {
                                      onClick: ($event) => removeElement(index, "comptes"),
                                      class: "btn btn-sm btn-circle btn-outline"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        class: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M6 18L18 6M6 6l12 12"
                                        })
                                      ]))
                                    ], 8, ["onClick"])
                                  ])
                                ]);
                              }), 256))
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                      createVNode(_component_Button, {
                        size: "small",
                        onClick: ($event) => comptesModal.value = !comptesModal.value,
                        outlined: "",
                        label: "Ajouter"
                      }, null, 8, ["onClick"])
                    ])
                  ]),
                  createVNode("hr"),
                  createVNode("div", { class: "flex flex-col mt-6 mb-6" }, [
                    createVNode("div", { class: "-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8" }, [
                      createVNode("div", { class: "inline-block min-w-full py-2 align-middle sm:px-6 lg:px-8" }, [
                        createVNode("div", { class: "overflow-hidden border-b border-gray-200 shadow sm:rounded-lg" }, [
                          createVNode("table", { class: "min-w-full divide-y divide-gray-200" }, [
                            createVNode("thead", { class: "bg-gray-50 dark:bg-gray-800" }, [
                              createVNode("tr", null, [
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                }, " Competences "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "px-6 py-3 text-xs font-medium tracking-wider text-left text-gray-500 uppercase"
                                }, " Niveau "),
                                createVNode("th", {
                                  scope: "col",
                                  class: "relative px-6 py-3"
                                })
                              ])
                            ]),
                            createVNode("tbody", { class: "bg-white divide-y divide-gray-200 dark:bg-gray-900" }, [
                              (openBlock(true), createBlock(Fragment, null, renderList(freelance.value.competences, (skill, index) => {
                                return openBlock(), createBlock("tr", null, [
                                  createVNode("td", { class: "px-6 py-4 text-sm font-medium text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(skill["skill"]), 1),
                                  createVNode("td", { class: "px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, toDisplayString(skill["level"]), 1),
                                  createVNode("td", { class: "flex flex-row gap-4 px-6 py-4 text-sm text-gray-500 dark:text-gray-200 whitespace-nowrap" }, [
                                    createVNode("button", {
                                      onClick: ($event) => ModifierCompetences(index),
                                      class: "btn btn-sm btn-circle btn-outline"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        "stroke-width": "1.5",
                                        stroke: "currentColor",
                                        class: "w-5 h-5"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          d: "M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"
                                        })
                                      ]))
                                    ], 8, ["onClick"]),
                                    createVNode("button", {
                                      onClick: ($event) => removeElement(index, "competences"),
                                      class: "btn btn-sm btn-circle btn-outline"
                                    }, [
                                      (openBlock(), createBlock("svg", {
                                        xmlns: "http://www.w3.org/2000/svg",
                                        class: "w-5 h-5",
                                        fill: "none",
                                        viewBox: "0 0 24 24",
                                        stroke: "currentColor"
                                      }, [
                                        createVNode("path", {
                                          "stroke-linecap": "round",
                                          "stroke-linejoin": "round",
                                          "stroke-width": "2",
                                          d: "M6 18L18 6M6 6l12 12"
                                        })
                                      ]))
                                    ], 8, ["onClick"])
                                  ])
                                ]);
                              }), 256))
                            ])
                          ])
                        ])
                      ])
                    ]),
                    createVNode("div", { class: "flex items-center justify-center mt-4" }, [
                      createVNode(_component_Button, {
                        size: "small",
                        onClick: ($event) => skillModal.value = !skillModal.value,
                        outlined: "",
                        label: "Ajouter"
                      }, null, 8, ["onClick"])
                    ])
                  ])
                ]),
                _: 1
              })
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div><div>`);
      _push(ssrRenderComponent(_component_Dialog, {
        visible: certfierModal.value,
        "onUpdate:visible": ($event) => certfierModal.value = $event,
        position: "bottom",
        modal: "",
        header: "Confirmer Comannde Finis",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="flex flex-col w-full mt-4"${_scopeId}><div class="grid gap-4 lg:grid-cols-3"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { value: "Certivier en" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              required: "",
              modelValue: unref(certification).certifier,
              "onUpdate:modelValue": ($event) => unref(certification).certifier = $event,
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { value: "Delivrer par" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              required: "",
              modelValue: unref(certification).delivrer,
              "onUpdate:modelValue": ($event) => unref(certification).delivrer = $event,
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { value: "Annee" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Dropdown, {
              placeholder: "annee",
              class: "!w-[8rem]",
              options: anneeSelected.value,
              modelValue: unref(certification).annee,
              "onUpdate:modelValue": ($event) => unref(certification).annee = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-center gap-4 mt-4"${_scopeId}>`);
            if (!editCertificatioButton.value) {
              _push2(ssrRenderComponent(_component_Button, {
                type: "submit",
                class: { "opacity-0": unref(certification).processing },
                outlined: "",
                severity: "success",
                label: "Ajouter"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Button, {
                type: "button",
                onClick: modifierCertificationForm,
                outlined: "",
                severity: "success",
                label: "Modifier"
              }, null, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_Button, {
              outlined: "",
              severity: "warning",
              onClick: ($event) => certfierModal.value = !certfierModal.value,
              label: "Annuler"
            }, null, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(addCertification, ["prevent"]),
                class: "flex flex-col w-full mt-4"
              }, [
                createVNode("div", { class: "grid gap-4 lg:grid-cols-3" }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, { value: "Certivier en" }),
                    createVNode(_component_InputText, {
                      required: "",
                      modelValue: unref(certification).certifier,
                      "onUpdate:modelValue": ($event) => unref(certification).certifier = $event,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, { value: "Delivrer par" }),
                    createVNode(_component_InputText, {
                      required: "",
                      modelValue: unref(certification).delivrer,
                      "onUpdate:modelValue": ($event) => unref(certification).delivrer = $event,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, { value: "Annee" }),
                    createVNode(_component_Dropdown, {
                      placeholder: "annee",
                      class: "!w-[8rem]",
                      options: anneeSelected.value,
                      modelValue: unref(certification).annee,
                      "onUpdate:modelValue": ($event) => unref(certification).annee = $event
                    }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-center gap-4 mt-4" }, [
                  !editCertificatioButton.value ? (openBlock(), createBlock(_component_Button, {
                    key: 0,
                    type: "submit",
                    class: { "opacity-0": unref(certification).processing },
                    outlined: "",
                    severity: "success",
                    label: "Ajouter"
                  }, null, 8, ["class"])) : (openBlock(), createBlock(_component_Button, {
                    key: 1,
                    type: "button",
                    onClick: modifierCertificationForm,
                    outlined: "",
                    severity: "success",
                    label: "Modifier"
                  })),
                  createVNode(_component_Button, {
                    outlined: "",
                    severity: "warning",
                    onClick: ($event) => certfierModal.value = !certfierModal.value,
                    label: "Annuler"
                  }, null, 8, ["onClick"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: educationModal.value,
        "onUpdate:visible": ($event) => educationModal.value = $event,
        position: "bottom",
        modal: "",
        header: "Confirmer Comannde Finis",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="flex flex-col w-full mt-4"${_scopeId}><div class="grid gap-4 lg:grid-cols-3"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { value: "Diplomer en" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              required: "",
              modelValue: unref(education).diplome,
              "onUpdate:modelValue": ($event) => unref(education).diplome = $event,
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { value: "Universite de " }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              required: "",
              modelValue: unref(education).universite,
              "onUpdate:modelValue": ($event) => unref(education).universite = $event,
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { value: "Annee" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Dropdown, {
              placeholder: "annee",
              class: "!w-[8rem]",
              options: anneeSelected.value,
              modelValue: unref(education).annee,
              "onUpdate:modelValue": ($event) => unref(education).annee = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-center gap-4 mt-4"${_scopeId}>`);
            if (!editEducationButton.value) {
              _push2(ssrRenderComponent(_component_Button, {
                type: "submit",
                outlined: "",
                severity: "success",
                label: "Ajouter"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Button, {
                type: "button",
                onClick: modifierEducationForm,
                outlined: "",
                severity: "success",
                label: "Modifier"
              }, null, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_Button, {
              outlined: "",
              severity: "warning",
              onClick: ($event) => educationModalReset(),
              label: "Annuler"
            }, null, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(addEducation, ["prevent"]),
                class: "flex flex-col w-full mt-4"
              }, [
                createVNode("div", { class: "grid gap-4 lg:grid-cols-3" }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, { value: "Diplomer en" }),
                    createVNode(_component_InputText, {
                      required: "",
                      modelValue: unref(education).diplome,
                      "onUpdate:modelValue": ($event) => unref(education).diplome = $event,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, { value: "Universite de " }),
                    createVNode(_component_InputText, {
                      required: "",
                      modelValue: unref(education).universite,
                      "onUpdate:modelValue": ($event) => unref(education).universite = $event,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, { value: "Annee" }),
                    createVNode(_component_Dropdown, {
                      placeholder: "annee",
                      class: "!w-[8rem]",
                      options: anneeSelected.value,
                      modelValue: unref(education).annee,
                      "onUpdate:modelValue": ($event) => unref(education).annee = $event
                    }, null, 8, ["options", "modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-center gap-4 mt-4" }, [
                  !editEducationButton.value ? (openBlock(), createBlock(_component_Button, {
                    key: 0,
                    type: "submit",
                    outlined: "",
                    severity: "success",
                    label: "Ajouter"
                  })) : (openBlock(), createBlock(_component_Button, {
                    key: 1,
                    type: "button",
                    onClick: modifierEducationForm,
                    outlined: "",
                    severity: "success",
                    label: "Modifier"
                  })),
                  createVNode(_component_Button, {
                    outlined: "",
                    severity: "warning",
                    onClick: ($event) => educationModalReset(),
                    label: "Annuler"
                  }, null, 8, ["onClick"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: langueModal.value,
        "onUpdate:visible": ($event) => langueModal.value = $event,
        position: "bottom",
        modal: "",
        header: "Langue ",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="flex flex-col w-full mt-4"${_scopeId}><div class="grid gap-4 lg:grid-cols-2"${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Dropdown, {
              modelValue: unref(langueParler).langue,
              "onUpdate:modelValue": ($event) => unref(langueParler).langue = $event,
              options: languagesArray.value,
              filter: "",
              size: "small",
              optionValue: "name",
              optionLabel: "name",
              placeholder: "Langue",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Dropdown, {
              modelValue: unref(langueParler).level,
              "onUpdate:modelValue": ($event) => unref(langueParler).level = $event,
              options: levelSelector.value,
              optionValue: "id",
              optionLabel: "name",
              placeholder: "Niveau",
              class: "w-full border border-gray-300 md:w-8rem"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-center gap-4 mt-4"${_scopeId}>`);
            if (!editLangueButton.value) {
              _push2(ssrRenderComponent(_component_Button, {
                type: "submit",
                outlined: "",
                severity: "success",
                label: "Ajouter"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Button, {
                type: "button",
                onClick: modifierLangueForm,
                outlined: "",
                severity: "success",
                label: "Modifier"
              }, null, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_Button, {
              outlined: "",
              severity: "warning",
              onClick: ($event) => langueModalReset(),
              label: "Annuler"
            }, null, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(addLangue, ["prevent"]),
                class: "flex flex-col w-full mt-4"
              }, [
                createVNode("div", { class: "grid gap-4 lg:grid-cols-2" }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode(_component_Dropdown, {
                      modelValue: unref(langueParler).langue,
                      "onUpdate:modelValue": ($event) => unref(langueParler).langue = $event,
                      options: languagesArray.value,
                      filter: "",
                      size: "small",
                      optionValue: "name",
                      optionLabel: "name",
                      placeholder: "Langue",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ]),
                  createVNode("div", { class: "w-full" }, [
                    createVNode(_component_Dropdown, {
                      modelValue: unref(langueParler).level,
                      "onUpdate:modelValue": ($event) => unref(langueParler).level = $event,
                      options: levelSelector.value,
                      optionValue: "id",
                      optionLabel: "name",
                      placeholder: "Niveau",
                      class: "w-full border border-gray-300 md:w-8rem"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-center gap-4 mt-4" }, [
                  !editLangueButton.value ? (openBlock(), createBlock(_component_Button, {
                    key: 0,
                    type: "submit",
                    outlined: "",
                    severity: "success",
                    label: "Ajouter"
                  })) : (openBlock(), createBlock(_component_Button, {
                    key: 1,
                    type: "button",
                    onClick: modifierLangueForm,
                    outlined: "",
                    severity: "success",
                    label: "Modifier"
                  })),
                  createVNode(_component_Button, {
                    outlined: "",
                    severity: "warning",
                    onClick: ($event) => langueModalReset(),
                    label: "Annuler"
                  }, null, 8, ["onClick"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: skillModal.value,
        "onUpdate:visible": ($event) => skillModal.value = $event,
        position: "bottom",
        modal: "",
        header: "Modification Competences",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="flex flex-col w-full mt-4"${_scopeId}><div class="grid gap-4 lg:grid-cols-2"${_scopeId}><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { value: "competences" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_InputText, {
              required: "",
              modelValue: unref(skillUser).skill,
              "onUpdate:modelValue": ($event) => unref(skillUser).skill = $event,
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_sfc_main$3, { value: "Niveau" }, null, _parent2, _scopeId));
            _push2(ssrRenderComponent(_component_Dropdown, {
              modelValue: unref(skillUser).level,
              "onUpdate:modelValue": ($event) => unref(skillUser).level = $event,
              options: levelSelector.value,
              size: "small",
              optionValue: "id",
              optionLabel: "name",
              placeholder: "Experience",
              class: "w-full"
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-center gap-4 mt-4"${_scopeId}>`);
            if (!editSkillButton.value) {
              _push2(ssrRenderComponent(_component_Button, {
                type: "submit",
                outlined: "",
                severity: "success",
                label: "Ajouter"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Button, {
                type: "button",
                onClick: modifierSkillForm,
                outlined: "",
                severity: "success",
                label: "Modifier"
              }, null, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_Button, {
              outlined: "",
              severity: "warning",
              onClick: ($event) => skillModalReset(),
              label: "Annuler"
            }, null, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(addCompetences, ["prevent"]),
                class: "flex flex-col w-full mt-4"
              }, [
                createVNode("div", { class: "grid gap-4 lg:grid-cols-2" }, [
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, { value: "competences" }),
                    createVNode(_component_InputText, {
                      required: "",
                      modelValue: unref(skillUser).skill,
                      "onUpdate:modelValue": ($event) => unref(skillUser).skill = $event,
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_sfc_main$3, { value: "Niveau" }),
                    createVNode(_component_Dropdown, {
                      modelValue: unref(skillUser).level,
                      "onUpdate:modelValue": ($event) => unref(skillUser).level = $event,
                      options: levelSelector.value,
                      size: "small",
                      optionValue: "id",
                      optionLabel: "name",
                      placeholder: "Experience",
                      class: "w-full"
                    }, null, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-center gap-4 mt-4" }, [
                  !editSkillButton.value ? (openBlock(), createBlock(_component_Button, {
                    key: 0,
                    type: "submit",
                    outlined: "",
                    severity: "success",
                    label: "Ajouter"
                  })) : (openBlock(), createBlock(_component_Button, {
                    key: 1,
                    type: "button",
                    onClick: modifierSkillForm,
                    outlined: "",
                    severity: "success",
                    label: "Modifier"
                  })),
                  createVNode(_component_Button, {
                    outlined: "",
                    severity: "warning",
                    onClick: ($event) => skillModalReset(),
                    label: "Annuler"
                  }, null, 8, ["onClick"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(ssrRenderComponent(_component_Dialog, {
        visible: comptesModal.value,
        "onUpdate:visible": ($event) => comptesModal.value = $event,
        position: "bottom",
        modal: "",
        header: "Modification du comptes",
        style: { width: "50rem" },
        breakpoints: { "1199px": "75vw", "575px": "90vw" }
      }, {
        default: withCtx((_, _push2, _parent2, _scopeId) => {
          if (_push2) {
            _push2(`<form class="flex flex-col w-full mt-4"${_scopeId}><div class="grid gap-4 lg:grid-cols-2"${_scopeId}><div class="w-full"${_scopeId}>`);
            _push2(ssrRenderComponent(_component_Dropdown, {
              modelValue: unref(comptes).compte,
              "onUpdate:modelValue": ($event) => unref(comptes).compte = $event,
              options: comptesSelector.value,
              optionLabel: "name",
              optionValue: "name",
              placeholder: "Selectionner un compte",
              class: "w-full"
            }, {
              option: withCtx((slotProps, _push3, _parent3, _scopeId2) => {
                if (_push3) {
                  _push3(`<div class="flex gap-4 align-items-center"${_scopeId2}><img${ssrRenderAttr("alt", slotProps.option.label)}${ssrRenderAttr("src", slotProps.option.code)} style="${ssrRenderStyle({ "width": "20px" })}"${_scopeId2}><div${_scopeId2}>${ssrInterpolate(slotProps.option.name)}</div></div>`);
                } else {
                  return [
                    createVNode("div", { class: "flex gap-4 align-items-center" }, [
                      createVNode("img", {
                        alt: slotProps.option.label,
                        src: slotProps.option.code,
                        style: { "width": "20px" }
                      }, null, 8, ["alt", "src"]),
                      createVNode("div", null, toDisplayString(slotProps.option.name), 1)
                    ])
                  ];
                }
              }),
              _: 1
            }, _parent2, _scopeId));
            _push2(`</div><div${_scopeId}>`);
            _push2(ssrRenderComponent(_component_InputText, {
              class: "block w-full",
              modelValue: unref(comptes).lien,
              "onUpdate:modelValue": ($event) => unref(comptes).lien = $event
            }, null, _parent2, _scopeId));
            _push2(`</div></div><div class="flex items-center justify-center gap-4 mt-4"${_scopeId}>`);
            if (!editCompteButton.value) {
              _push2(ssrRenderComponent(_component_Button, {
                type: "submit",
                outlined: "",
                severity: "success",
                label: "Ajouter"
              }, null, _parent2, _scopeId));
            } else {
              _push2(ssrRenderComponent(_component_Button, {
                type: "button",
                onClick: modifierComptesForm,
                outlined: "",
                severity: "success",
                label: "Modifier"
              }, null, _parent2, _scopeId));
            }
            _push2(ssrRenderComponent(_component_Button, {
              outlined: "",
              severity: "warning",
              onClick: ($event) => comptesModalReset(),
              label: "Annuler"
            }, null, _parent2, _scopeId));
            _push2(`</div></form>`);
          } else {
            return [
              createVNode("form", {
                onSubmit: withModifiers(addComptes, ["prevent"]),
                class: "flex flex-col w-full mt-4"
              }, [
                createVNode("div", { class: "grid gap-4 lg:grid-cols-2" }, [
                  createVNode("div", { class: "w-full" }, [
                    createVNode(_component_Dropdown, {
                      modelValue: unref(comptes).compte,
                      "onUpdate:modelValue": ($event) => unref(comptes).compte = $event,
                      options: comptesSelector.value,
                      optionLabel: "name",
                      optionValue: "name",
                      placeholder: "Selectionner un compte",
                      class: "w-full"
                    }, {
                      option: withCtx((slotProps) => [
                        createVNode("div", { class: "flex gap-4 align-items-center" }, [
                          createVNode("img", {
                            alt: slotProps.option.label,
                            src: slotProps.option.code,
                            style: { "width": "20px" }
                          }, null, 8, ["alt", "src"]),
                          createVNode("div", null, toDisplayString(slotProps.option.name), 1)
                        ])
                      ]),
                      _: 1
                    }, 8, ["modelValue", "onUpdate:modelValue", "options"])
                  ]),
                  createVNode("div", null, [
                    createVNode(_component_InputText, {
                      class: "block w-full",
                      modelValue: unref(comptes).lien,
                      "onUpdate:modelValue": ($event) => unref(comptes).lien = $event
                    }, null, 8, ["modelValue", "onUpdate:modelValue"])
                  ])
                ]),
                createVNode("div", { class: "flex items-center justify-center gap-4 mt-4" }, [
                  !editCompteButton.value ? (openBlock(), createBlock(_component_Button, {
                    key: 0,
                    type: "submit",
                    outlined: "",
                    severity: "success",
                    label: "Ajouter"
                  })) : (openBlock(), createBlock(_component_Button, {
                    key: 1,
                    type: "button",
                    onClick: modifierComptesForm,
                    outlined: "",
                    severity: "success",
                    label: "Modifier"
                  })),
                  createVNode(_component_Button, {
                    outlined: "",
                    severity: "warning",
                    onClick: ($event) => comptesModalReset(),
                    label: "Annuler"
                  }, null, 8, ["onClick"])
                ])
              ], 40, ["onSubmit"])
            ];
          }
        }),
        _: 1
      }, _parent));
      _push(`</div></div>`);
    };
  }
});
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("resources/js/Pages/Freelance/Profile/Profile.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
export {
  _sfc_main as default
};
