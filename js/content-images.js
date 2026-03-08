// Content/specification images for each product
// These are technical diagrams, spec charts, wiring diagrams, etc.
(function() {
  var CONTENT_IMAGES = {
    "ac-varistor": [
      "../flyboat-website/images/products/content/20210930102356501e80070a0845ada4749e48f4d4fc11.jpg",
      "../flyboat-website/images/products/content/20210930102356cf4a9df7a76e42b0867ec293f64306dc.jpg",
      "../flyboat-website/images/products/content/20210930102435eef018d306484eb39f1e016dc728a7d1.jpg",
      "../flyboat-website/images/products/content/202109301024366c63c4bb09ed479b94a299e4837f8d49.jpg",
      "../flyboat-website/images/products/content/20210930102436f59ecc16c27746508c441a6d2a77a53a.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg"
    ],
    "mov-dc": [
      "../flyboat-website/images/products/content/2021093013250986dae5c813a54f87aff7e10403c189fd.jpg",
      "../flyboat-website/images/products/content/20210930102435eef018d306484eb39f1e016dc728a7d1.jpg",
      "../flyboat-website/images/products/content/202109301024366c63c4bb09ed479b94a299e4837f8d49.jpg",
      "../flyboat-website/images/products/content/20210930102436f59ecc16c27746508c441a6d2a77a53a.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg"
    ],
    "class-i-mov": [
      "../flyboat-website/images/products/content/20210930133942f9c43092430146b69a6877d22df7c1a3.jpg",
      "../flyboat-website/images/products/content/20210930102435eef018d306484eb39f1e016dc728a7d1.jpg",
      "../flyboat-website/images/products/content/202109301024366c63c4bb09ed479b94a299e4837f8d49.jpg",
      "../flyboat-website/images/products/content/20210930102436f59ecc16c27746508c441a6d2a77a53a.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg"
    ],
    "industrial-high-energy-varistor": [
      "../flyboat-website/images/products/content/20210930134332f5a8185d35c341fd921df3341ed53586.jpg",
      "../flyboat-website/images/products/content/20210930134327a25c320e6f8940b792316a5685e0c722.jpg",
      "../flyboat-website/images/products/content/20210930102435eef018d306484eb39f1e016dc728a7d1.jpg",
      "../flyboat-website/images/products/content/202109301024366c63c4bb09ed479b94a299e4837f8d49.jpg",
      "../flyboat-website/images/products/content/20210930102436f59ecc16c27746508c441a6d2a77a53a.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg"
    ],
    "metal-oxide-square-disc-varistors": [
      "../flyboat-website/images/products/content/2021093013491687ab9bfff2e14b3a8dbd31340dd476ed.jpg",
      "../flyboat-website/images/products/content/2021093013491278a92ac698cf44d8a268931283fa81cd.jpg",
      "../flyboat-website/images/products/content/20210930102435eef018d306484eb39f1e016dc728a7d1.jpg",
      "../flyboat-website/images/products/content/202109301024366c63c4bb09ed479b94a299e4837f8d49.jpg",
      "../flyboat-website/images/products/content/20210930102436f59ecc16c27746508c441a6d2a77a53a.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg"
    ],
    "high-energy-suppressor-discs": [
      "../flyboat-website/images/products/content/2021093014064351a53763690a4b29bc5c6e5335e6a0af.jpg",
      "../flyboat-website/images/products/content/2021093014070967287279921c4e4b922427f72c4aa1c5.jpg",
      "../flyboat-website/images/products/content/20210930102435eef018d306484eb39f1e016dc728a7d1.jpg",
      "../flyboat-website/images/products/content/202109301024366c63c4bb09ed479b94a299e4837f8d49.jpg",
      "../flyboat-website/images/products/content/20210930102436f59ecc16c27746508c441a6d2a77a53a.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg"
    ],
    "mov-varistor-for-spd": [
      "../flyboat-website/images/products/content/202109301515131de8627e08ce402196e0fdad42d7400e.jpg",
      "../flyboat-website/images/products/content/20210930151520c489da8cfa524faea372939bdc7af3e7.jpg",
      "../flyboat-website/images/products/content/20210930102435eef018d306484eb39f1e016dc728a7d1.jpg",
      "../flyboat-website/images/products/content/202109301024366c63c4bb09ed479b94a299e4837f8d49.jpg",
      "../flyboat-website/images/products/content/20210930102436f59ecc16c27746508c441a6d2a77a53a.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg"
    ],
    "bare-disc-varistors": [
      "../flyboat-website/images/products/content/202109301527583486a8a4451d45a78f49fd0adbf82f7b.jpg",
      "../flyboat-website/images/products/content/20210930152758cb256e7f6fa54c5784000e1b08de3d24.jpg",
      "../flyboat-website/images/products/content/202109301528106395f7ecf7a540f5ab0f61451081d3fc.jpg",
      "../flyboat-website/images/products/content/20210930102435eef018d306484eb39f1e016dc728a7d1.jpg",
      "../flyboat-website/images/products/content/202109301024366c63c4bb09ed479b94a299e4837f8d49.jpg",
      "../flyboat-website/images/products/content/20210930102436f59ecc16c27746508c441a6d2a77a53a.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg"
    ],
    "32d-metal-oxide-varistor": [
      "../flyboat-website/images/products/content/20210930152955f60c6d05a38b4921a9174babaa65d4e2.jpg",
      "../flyboat-website/images/products/content/20210930153015bc72931b1b8845e59087c2a7477baa7c.jpg",
      "../flyboat-website/images/products/content/202109301530214615782ca11d4563ac7582a3dbfc72d2.jpg",
      "../flyboat-website/images/products/content/20210930102435eef018d306484eb39f1e016dc728a7d1.jpg",
      "../flyboat-website/images/products/content/202109301024366c63c4bb09ed479b94a299e4837f8d49.jpg",
      "../flyboat-website/images/products/content/20210930102436f59ecc16c27746508c441a6d2a77a53a.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg"
    ],
    "34s-metal-oxide-varistor": [
      "../flyboat-website/images/products/content/202109301538523e8a1846efc74605b6c68203c46b7c28.jpg",
      "../flyboat-website/images/products/content/20210930153724311437924e304c479536fac526a0fedf.jpg",
      "../flyboat-website/images/products/content/20210930102435eef018d306484eb39f1e016dc728a7d1.jpg",
      "../flyboat-website/images/products/content/202109301024366c63c4bb09ed479b94a299e4837f8d49.jpg",
      "../flyboat-website/images/products/content/20210930102436f59ecc16c27746508c441a6d2a77a53a.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg"
    ],
    "surge-protectors-signal-systems": [
      "../flyboat-website/images/products/content/20210930155248d1581b48095a4d489e85787c166b99e3.jpg",
      "../flyboat-website/images/products/content/202109301552469dc5bd56679c4a9abea809fb6cf4c2c5.jpg",
      "../flyboat-website/images/products/content/202109301552489f73a76c9d5d487b8ad0bb60b59c69eb.jpg",
      "../flyboat-website/images/products/content/20210930155247787c3749f3754aadb1c6ea91616a0766.jpg",
      "../flyboat-website/images/products/content/202109301551188c73dea9eb4440e99e7da9968c77a496.jpg",
      "../flyboat-website/images/products/content/20210930155442ff516999ccd6409b88edd46194fa5303.jpg",
      "../flyboat-website/images/products/content/2021093015544288c4106132ef4fa9985f6b5e1158e8f6.jpg",
      "../flyboat-website/images/products/content/20210930155442e1e3694bb3e74e679b9482d02948caaf.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg",
      "../flyboat-website/images/products/content/20210930155629bf91eb3943c1425a93bc26f45a65db8a.jpg",
      "../flyboat-website/images/products/content/20210930155629fde44db1f5d8420bad465be641f78283.jpg"
    ],
    "power-line-spd": [
      "../flyboat-website/images/products/content/20210930160413e3cddbf2a435445b8348029041d194d7.jpg",
      "../flyboat-website/images/products/content/202109301605343740e7fb65b94586a69ec49f2bf1e7e6.jpg",
      "../flyboat-website/images/products/content/202109301552489f73a76c9d5d487b8ad0bb60b59c69eb.jpg",
      "../flyboat-website/images/products/content/202109301551188c73dea9eb4440e99e7da9968c77a496.jpg",
      "../flyboat-website/images/products/content/20210930155442ff516999ccd6409b88edd46194fa5303.jpg",
      "../flyboat-website/images/products/content/2021093015544288c4106132ef4fa9985f6b5e1158e8f6.jpg",
      "../flyboat-website/images/products/content/20210930155442e1e3694bb3e74e679b9482d02948caaf.jpg",
      "../flyboat-website/images/products/content/202109301608187b25e6c2a66546559a887dae90a12c86.jpg"
    ],
    "dc-mov-for-pv-system": [
      "../flyboat-website/images/products/content/20210930161117f2cbfa6d57bd4dbbbb20f2deb9f10a95.jpg",
      "../flyboat-website/images/products/content/20210930161103eabd915a5cc2493c82b98a5572b4f189.jpg",
      "../flyboat-website/images/products/content/20210930161104c806af8b7b9a4999bbc9ea42fcdade86.jpg",
      "../flyboat-website/images/products/content/20210930161105beb81d09a1e040088349961b831fe09c.jpg",
      "../flyboat-website/images/products/content/2021093016110579dd3fa1256c4e5f9de9dc426984e5e7.jpg"
    ],
    "solar-system-1000v": [
      "../flyboat-website/images/products/content/20210930161848f3881ed920fd46f1a91663c24ea64ff3.jpg",
      "../flyboat-website/images/products/content/202109301619258093873aa9e84b939a3b9d62561aa087.jpg",
      "../flyboat-website/images/products/content/2021093016192337debbf3e6384348ba108ab2d5a45e81.jpg",
      "../flyboat-website/images/products/content/20210930161924858a1ddd926d45f18d673069f9881aa5.jpg",
      "../flyboat-website/images/products/content/20210930161925aaee152750e14520a4a645d5d3bfa203.jpg",
      "../flyboat-website/images/products/content/202109301619280ae981247c1741398df38d989b520fa8.jpg",
      "../flyboat-website/images/products/content/20210930161930eea9c05785a44b579cf0b8c6dcbfbeec.jpg",
      "../flyboat-website/images/products/content/20210930161930c3416f07b64b41189e00c282742ae5f9.jpg"
    ],
    "1000v-dc-spd": [
      "../flyboat-website/images/products/content/20210930162643cc8bb287e8e24b41b8b9f29a83baa68d.jpg",
      "../flyboat-website/images/products/content/2021093016271550a356f9c0bd49fcaec42a07564a2f9e.jpg",
      "../flyboat-website/images/products/content/20210930162804e707434746854d26bf34ac629db9aba8.jpg",
      "../flyboat-website/images/products/content/20210930162805e586962b94584db1bef26c754fa35b83.jpg",
      "../flyboat-website/images/products/content/202109301628056b01551649a44e7193a8becf519bb2cd.jpg",
      "../flyboat-website/images/products/content/20210930162805ff3ea27c462646e297d3b8fa0e74af49.jpg",
      "../flyboat-website/images/products/content/20210930155248d1581b48095a4d489e85787c166b99e3.jpg",
      "../flyboat-website/images/products/content/202109301552469dc5bd56679c4a9abea809fb6cf4c2c5.jpg",
      "../flyboat-website/images/products/content/202109301552489f73a76c9d5d487b8ad0bb60b59c69eb.jpg",
      "../flyboat-website/images/products/content/20210930155247787c3749f3754aadb1c6ea91616a0766.jpg",
      "../flyboat-website/images/products/content/202109301551188c73dea9eb4440e99e7da9968c77a496.jpg",
      "../flyboat-website/images/products/content/20210930155442ff516999ccd6409b88edd46194fa5303.jpg",
      "../flyboat-website/images/products/content/2021093015544288c4106132ef4fa9985f6b5e1158e8f6.jpg",
      "../flyboat-website/images/products/content/20210930155442e1e3694bb3e74e679b9482d02948caaf.jpg",
      "../flyboat-website/images/products/content/202109301024448c52fec55ef54d8f912f0826e4578e84.jpg",
      "../flyboat-website/images/products/content/2021093010244336a692679f9d473b9f408b209fc4ba86.jpg",
      "../flyboat-website/images/products/content/202109301024420157eaa63d204911bd39b337e814bad9.jpg",
      "../flyboat-website/images/products/content/20210930102449c7987f1d2ed8414b90be5127bd8dc4bb.jpg",
      "../flyboat-website/images/products/content/202109301024488a5041ead2604f9f8c1e8110c97fab63.jpg",
      "../flyboat-website/images/products/content/20210930155629bf91eb3943c1425a93bc26f45a65db8a.jpg",
      "../flyboat-website/images/products/content/20210930155629fde44db1f5d8420bad465be641f78283.jpg"
    ],
    "ac-surge-protective-device-spd": [
      "../flyboat-website/images/products/content/20210930163325c6c51c703c0a41e8be23a9a8b82f22a6.jpg",
      "../flyboat-website/images/products/content/2021093016340056813a2b7bf243dfa33352c934aaeb18.jpg",
      "../flyboat-website/images/products/content/20210930163529749f49e9709c4015a1ffb75fb1f2a835.jpg",
      "../flyboat-website/images/products/content/20210930163527cafc9d68011f4676a60ea801cafcb37b.jpg",
      "../flyboat-website/images/products/content/20210930163529d3ac20e93f8046998b976baf8b9d42b7.jpg",
      "../flyboat-website/images/products/content/202109301635323b8a53baec05438a8c8a94ba7ed86eaa.jpg"
    ],
    "ul-ce-spd": [
      "../flyboat-website/images/products/content/20210930164050262333f419a74b7290a835fc9baf1746.jpg",
      "../flyboat-website/images/products/content/20210930164051b83a2050a3c7406780b523f959744e4d.jpg",
      "../flyboat-website/images/products/content/2021093016405324b01db138a14f83bcfedd1a81598e5a.jpg",
      "../flyboat-website/images/products/content/202109301640524efce11110414db896b4e16dc6740bf0.jpg",
      "../flyboat-website/images/products/content/20210930164052193b6d0bd92148afbf6eb47a77396d7f.jpg",
      "../flyboat-website/images/products/content/202109301552489f73a76c9d5d487b8ad0bb60b59c69eb.jpg",
      "../flyboat-website/images/products/content/20210930155247787c3749f3754aadb1c6ea91616a0766.jpg",
      "../flyboat-website/images/products/content/202109301551188c73dea9eb4440e99e7da9968c77a496.jpg",
      "../flyboat-website/images/products/content/20210930155442ff516999ccd6409b88edd46194fa5303.jpg",
      "../flyboat-website/images/products/content/2021093015544288c4106132ef4fa9985f6b5e1158e8f6.jpg",
      "../flyboat-website/images/products/content/20210930155442e1e3694bb3e74e679b9482d02948caaf.jpg"
    ],
    "imax-40ka-230-400v": [
      "../flyboat-website/images/products/content/2021093016443032ecda3943f74d8e8269d22adc91592f.jpg"
    ],
    "220v-10-40ka-surge-protector": [
      "../flyboat-website/images/products/content/2021093017115378c6125f3d3947fe912d38bbdb7dad23.jpg",
      "../flyboat-website/images/products/content/20210930171130e6bf5b64239d419a8ea18122f08e9b8d.jpg"
    ],
    "220v-lightning-protection-three-phase": [
      "../flyboat-website/images/products/content/2021093016534442e1ed430cf740f290617ac65413dafd.jpg",
      "../flyboat-website/images/products/content/202109301653459cb2a23e1a5a49c8a98dbc446be5f2dc.jpg",
      "../flyboat-website/images/products/content/2021093016534278a4106f936843a89ad645ab353d54f6.jpg",
      "../flyboat-website/images/products/content/20210930165344687d5ac99e87492aa2e1d0a5164a50eb.jpg"
    ],
    "surge-protective-modules": [
      "../flyboat-website/images/products/content/2021100809164142da0671b63441e297219d2cf0778f6f.jpg",
      "../flyboat-website/images/products/content/202110080916412391a521247c4a00a72a0e9f36c40ab3.jpg",
      "../flyboat-website/images/products/content/20211008091641c7f31d9d06c94401869e080232c9f2b8.jpg",
      "../flyboat-website/images/products/content/20211008091643edf00f45ba2a40f385ce0c64b257afd6.jpg",
      "../flyboat-website/images/products/content/2021100809164292eee2826135401283a9dae5356c8bee.jpg",
      "../flyboat-website/images/products/content/20211008091644b109c3eac4b540a0b80d59f3ded05991.jpg",
      "../flyboat-website/images/products/content/20211008091644de86d6a19bf149298beed506e2547b31.jpg",
      "../flyboat-website/images/products/content/202110080916450a693c8d1ba449e1852f230f33058e0c.jpg",
      "../flyboat-website/images/products/content/20211008091646c0c5022dbfcd4922bcd5610a2327ee82.jpg",
      "../flyboat-website/images/products/content/20211008091645eff3f93ade3d45ada1283da4daf078a3.jpg"
    ],
    "surge-replacement-module": [
      "../flyboat-website/images/products/content/20211008092016e44096ab5bc54379825284210248315b.jpg",
      "../flyboat-website/images/products/content/2021100809201701a5885837644aa88bf4b53c91ed0254.jpg"
    ],
    "onboard-surge-protection-device": [
      "../flyboat-website/images/products/content/202110080922162104b2a8a6f3413e86d32f91e5369b8d.jpg",
      "../flyboat-website/images/products/content/20211008092217b3e247c717f842038fe24871c63c2932.jpg",
      "../flyboat-website/images/products/content/20211008092239532f40e730bd4f5796b536c7ab9f9e12.jpg"
    ],
    "spd-modular": [
      "../flyboat-website/images/products/content/202110080924524332f1de2f1c4809a5688990721087b4.jpg",
      "../flyboat-website/images/products/content/202110080924527cbced19fb904286ac43f7b7ca68eaf1.jpg",
      "../flyboat-website/images/products/content/20211008092454a52fe971803346b5919c00f4c01a27f0.jpg",
      "../flyboat-website/images/products/content/202110080924542b60dd60083f464c82c9f54326c329ca.jpg",
      "../flyboat-website/images/products/content/20211008092455b56fa51bc89b4d2b81f5f43952cf8070.jpg"
    ],
    "plug-in-surge-arrester": [
      "../flyboat-website/images/products/content/20211008092635a62d69a69c0d4a239035f9722e915ea5.jpg",
      "../flyboat-website/images/products/content/2021100809263555c6914006c743d9bc553cf6fc7dfa5a.jpg",
      "../flyboat-website/images/products/content/20211008092635c50f7b6bb7fa47b3bae8aab01a6c45d8.jpg"
    ],
    "surge-protective-components": [
      "../flyboat-website/images/products/content/2021100809321831ff244ccc0f4b7abf758145f9bb6190.jpg",
      "../flyboat-website/images/products/content/202110080931234eab0a0030ca43dc8ea5aef75cfee52f.jpg",
      "../flyboat-website/images/products/content/202110080931366df7f6217ee545fa8d5aac5917914b0c.jpg",
      "../flyboat-website/images/products/content/20211008093123a20e8393a4214d339f0cca8abe32dfba.jpg",
      "../flyboat-website/images/products/content/20211008093055a5efaa47762a4b498e9ddfe6cae9450f.jpg",
      "../flyboat-website/images/products/content/202110080931023ab1b38ae49c4364a01066e56fc5b627.jpg"
    ],
    "plug-in-spd-block": [
      "../flyboat-website/images/products/content/2021100809363207a09a71e08244649643e4cea4ad4ea5.jpg",
      "../flyboat-website/images/products/content/20211008093632e54bb47e11764db5bee6ab1797e37d8f.jpg",
      "../flyboat-website/images/products/content/20211008093611e0751cad7cad48839728d267116488bc.jpg",
      "../flyboat-website/images/products/content/20211008093612f0bff332d5864391972f87f08a173e65.jpg",
      "../flyboat-website/images/products/content/20211008093616d72b19e3e0074a9e83fe926fe5869ef2.jpg",
      "../flyboat-website/images/products/content/2021100809355371782299bf7d49798a6fa967dde366ef.jpg",
      "../flyboat-website/images/products/content/20211008093553c686a43b1cf148fd9fbe3b2719891673.jpg"
    ],
    "customizable-spd-plastic": [
      "../flyboat-website/images/products/content/202110080945404b8ffb275ede450e8246e3fe6fc4b822.jpg",
      "../flyboat-website/images/products/content/2021100809455984a5a1dbd8da4ebb885fedff6406f30f.jpg",
      "../flyboat-website/images/products/content/202110080946177d5da3b563b34d3e9450b68e36e731d2.jpg",
      "../flyboat-website/images/products/content/20211008094623f9e38445febb476997345681b57567ed.jpg",
      "../flyboat-website/images/products/content/202110080947511904a9eff01344b98194658cf81baf55.jpg",
      "../flyboat-website/images/products/content/2021100809475286075e98608e480697c7613a128d4ffd.jpg",
      "../flyboat-website/images/products/content/20211008094807a278de3da2ae4fb29fee1c52bfbfb5eb.jpg",
      "../flyboat-website/images/products/content/2021100809504155fae5d2059344988f0c060a3f417f0c.jpg",
      "../flyboat-website/images/products/content/20211008095046214b9924410046ee818f3fa754bf1441.jpg",
      "../flyboat-website/images/products/content/20211008095109dc066badd65e4b1a9c1cd462d371f40d.jpg",
      "../flyboat-website/images/products/content/20211008095125d2e1fb13061e4ca89396fa10a9875621.jpg",
      "../flyboat-website/images/products/content/20211008095111b2cc2fb04c3641adab071e52f5f9dfd1.jpg",
      "../flyboat-website/images/products/content/20211008095112b670ac9a72cb4e7bb5ec0a15a0549d6b.jpg",
      "../flyboat-website/images/products/content/20211008095227e433d976b7484ed98448dfd5321109c4.jpg",
      "../flyboat-website/images/products/content/202110080952264e286734c76047d9a2dac9dabb5d924b.jpg",
      "../flyboat-website/images/products/content/20211008095227c777e1aa4c0d4b8183ca33f935df4f8d.jpg",
      "../flyboat-website/images/products/content/2021100809523016e9cd61ed4d444f99dfdef309ed3930.jpg",
      "../flyboat-website/images/products/content/202110080952285347bf49d9e34e12a1868a353cfd3200.jpg",
      "../flyboat-website/images/products/content/20211008095229b10e4f13fc48411b9e5fc66adca17adc.jpg"
    ],
    "parts-surge-arrestor": [
      "../flyboat-website/images/products/content/20211008101320796769b75c454b4b93138086ea347457.jpg",
      "../flyboat-website/images/products/content/202110081013133652bb344438497492ecb994acb5bbeb.jpg",
      "../flyboat-website/images/products/content/2021100810125399ac3f249a3f472796248d226754fc26.jpg",
      "../flyboat-website/images/products/content/2021100810163814b3308c95cf47169d0bdf6100acab43.jpg",
      "../flyboat-website/images/products/content/20211008101713def76d6490fd4009b21d809eb83e9672.jpg",
      "../flyboat-website/images/products/content/20211008101724c9e4cc1121f84d0cb68c93fa66585794.jpg",
      "../flyboat-website/images/products/content/202110081017148d9af4cdc08c414986f6be6896268a20.jpg",
      "../flyboat-website/images/products/content/20211008101750336a85eb248e4ddfb1ee2354330d4be7.jpg",
      "../flyboat-website/images/products/content/202110081018025f2b0e55d1e5400fb710e5867da10bb6.jpg",
      "../flyboat-website/images/products/content/202110081018097901ae9086cb44dea612558537b4f510.jpg",
      "../flyboat-website/images/products/content/20211008101809e04a174ea87b4b28904929e9ae43962a.jpg",
      "../flyboat-website/images/products/content/20211008101812a139dae738a64f68b209e1499b260e0c.jpg",
      "../flyboat-website/images/products/content/202110081011209ae1dd8e4553497d944093f0a70d8017.jpg",
      "../flyboat-website/images/products/content/20211008101121b837b0328c28485ebbbacb4646a490f6.jpg",
      "../flyboat-website/images/products/content/20211008101122229570211bcd42b9aca6052fbaefb03b.jpg",
      "../flyboat-website/images/products/content/202110081011235f385fb1273c476683191ddf5fc65382.jpg",
      "../flyboat-website/images/products/content/20211008101125f4941efbbc4b47899dd8bf487539ab9d.jpg"
    ],
    "green-plastic-spd": [
      "../flyboat-website/images/products/content/2021100810215964bd5bbffbe4419eb418e1ac7a9f4dde.jpg",
      "../flyboat-website/images/products/content/20211008102152923b48a3abaf4664a5ab3a9893bc4f10.jpg",
      "../flyboat-website/images/products/content/202110081021261df1fc9ce1554200a266b9f08e954ac5.jpg",
      "../flyboat-website/images/products/content/2021100810212776104beacd4544ceab403925b8f2d76e.jpg",
      "../flyboat-website/images/products/content/2021100810234919f05c20637a4af881a2de270d3509f4.jpg",
      "../flyboat-website/images/products/content/20211008102400333936a999c34d30a8a6227150eb54a0.jpg",
      "../flyboat-website/images/products/content/2021100810234963f50194138a44678be8f56068988887.jpg",
      "../flyboat-website/images/products/content/20211008102414f66e4e6af1aa48f6a6d8a2c33de4f39c.jpg",
      "../flyboat-website/images/products/content/202110081024155165ee2336d54b03befe524ea7732aeb.jpg",
      "../flyboat-website/images/products/content/202110081024219698da3ecd8447fa9a6a63c07e4a7075.jpg",
      "../flyboat-website/images/products/content/202110081024222f8fe08c0e0b48209fd75061de361fe0.jpg",
      "../flyboat-website/images/products/content/20211008102423e252be87582f4e6f8474286ca58f5aff.jpg",
      "../flyboat-website/images/products/content/20211008102425e7e99ac4a80140f385136264f9c9068d.jpg",
      "../flyboat-website/images/products/content/202110081011209ae1dd8e4553497d944093f0a70d8017.jpg",
      "../flyboat-website/images/products/content/20211008101121b837b0328c28485ebbbacb4646a490f6.jpg",
      "../flyboat-website/images/products/content/20211008101123ecfc2fa3139b4d3d9325d2cc2c7f5ae9.jpg",
      "../flyboat-website/images/products/content/20211008101122229570211bcd42b9aca6052fbaefb03b.jpg",
      "../flyboat-website/images/products/content/202110081011235f385fb1273c476683191ddf5fc65382.jpg",
      "../flyboat-website/images/products/content/20211008101125f4941efbbc4b47899dd8bf487539ab9d.jpg"
    ]
  };

  // Merge content images into PRODUCTS_DATA
  if (window.PRODUCTS_DATA) {
    Object.keys(CONTENT_IMAGES).forEach(function(id) {
      if (window.PRODUCTS_DATA[id]) {
        window.PRODUCTS_DATA[id].contentImages = CONTENT_IMAGES[id];
      }
    });
  }
})();
