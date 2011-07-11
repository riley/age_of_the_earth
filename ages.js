var earth_ages = {
	cenozoic: {
		quaternary: {
			holocene: 0.01,
			pleistocene: {
				calabrian: 1.8,
				gelasian: 0.8
			}
		},
		tertiary: {
			neogene: {
				pliocene: {
					piacenzian: 1,
					zanclian: 1.7
				},
				miocene: {
					messinian: 1.9,
					tortonian: 4.4,
					serravallian: 2.2,
					langhian: 2.2,
					burdigalian: 4.4,
					aquitanian: 2.6
				}
			},
			paleogene: {
				oligocene: {
					chattian: 5.4,
					rupelian: 5.5
				},
				eocene: {
					priabonian: 3.3,
					bartonian: 3.2,
					lutetian: 8.2,
					ypresian: 7.2
				},
				paleocene: {
					thanetian: 2.9,
					selandian: 3,
					danian: 3.8
				}
			}
		}
	},
	mesozoic: {
		cretaceous: {
			"upper cretaceous": {
				maastrichtian: 5.1,
				campanian: 12.9,
				santonian: 2.3,
				coniacian: 3.5,
				turonian: 4.2,
				cenomanian: 6.1
			},
			"lower cretaceous": {
				albian: 12.4,
				aptian: 13,
				barremian: 5,
				hautervian: 6,
				valanginian: 4,
				berriasian: 5.5
			}
		},
		jurassic: {
			"late jurassic": {
				tithonian: 5.5,
				kimmeridgian: 5,
				oxfordian: 5
			},
			"middle jurrassic": {
				callovian: 4,
				bathonian: 3,
				bajocian: 4,
				aalenian: 4
			},
			"early jurassic": {
				toarcian: 7,
				pliensbachian: 7,
				sinemurian: 7,
				hettangian: 4.6
			}
		},
		triassic: {
			"late triassic": {
				rhaetian: 2.4,
				norian: 24,
				carnian: 9
			},
			"middle triassic": {
				ladinian: 6.9,
				anisian: 7.4
			},
			"early triassic": {
				olenekian: 5,
				induan: 1
			}
		}
	},
	paleozoic: {
		permian: {
			"late permian": {
				changhsingian: 2,
				wuchiapingian: 6,
			},
			"middle permian": {
				capitanian: 6,
				wordian: 2,
				roadian: 3
			},
			"early permian": {
				kungurian: 5,
				artinskian: 8,
				sakmarian: 13,
				asselian: 2
			}
		},
		carboniferous: {
			pennsylvanian: {
				gzhelian: 5,
				kasimovian: 2,
				moscovian: 6,
				bashkirian: 6
			},
			mississippian: {
				serpukhovian: 8,
				visean: 19,
				tournaisian: 14
			}
		},
		devonian: {
			"late devonian": {
				famennian: 15,
				frasnian: 11
			},
			"middle devonian": {
				givetian: 7,
				eifelian: 6
			},
			"early devonian": {
				emsian: 9,
				prgian: 4,
				lochkovian: 13
			}
		},
		silurian: {
			pridoli: 3,
			ludlow: 4,
			wenlock: 5,
			llandovery: 16
		},
		ordovician: {
			hirnantian: 2,
			katian: 9,
			sandbian: 6,
			darriwilian: 7,
			dapingian: 4,
			floian: 7,
			tremadocian: 9
		},
		cambrian: {
			"upper cambrian": {
				"stage 10": 4,
				"stage 9": 4,
				paibian: 5
			},
			"middle cambrian": {
				guzhangian: 2,
				drumian: 4,
				"stage 5": 3
			},
			"lower cambrian": {
				"stage 4": 7,
				"stage 3": 4
			},
			terreneuvian: {
				"stage 2": 14,
				fortunian: 7
			}
		}
	},
	precambrian: {
		proterozoic: {
			neoproterozoic: {
				ediacaran: 88,
				cryogenian: 220,
				tonian: 150
			},
			mesoproterozoic: {
				stenian: 200,
				ectasian: 200,
				calymmian: 200
			},
			paleoproterozoic: {
				statherian: 200,
				orosirian: 250,
				rhyacian: 250,
				siderian: 200
			}
		},
		archean: {
			neoarchean: 300,
			mesoarchean: 400,
			paleoarchean: 400,
			eoarchean: 250
		},
		hadean: 767
	}
};