const { interactionPolicy: { Prompt, base: policy } } = require('../../lib'); // require('oidc-provider');

// copies the default policy, already has login and consent prompt policies
const interactions = policy();

// create a requestable prompt with no implicit checks
const selectAccount = new Prompt({
  name: 'select_account',
  requestable: true,
});

// add to index 0, order goes select_account > login > consent
interactions.add(selectAccount, 0);

module.exports = {
  clients: [
     {
       client_id: '1t5qj1k7af00d1cifoet68qd2o',
       client_secret: '1osadaobtrkrvbupjblnhub8rv1f2vpooo1hh6pug7r0mmrd98ue',
       grant_types: ['refresh_token', 'authorization_code'],
       redirect_uris: ['aero.navblue.missionplus.auth://oauth2redirect'],
     }
  ],
  interactions: {
    policy: interactions,
    url(ctx, interaction) { // eslint-disable-line no-unused-vars
      return `/interaction/${ctx.oidc.uid}`;
    },
  },
  cookies: {
    long: { signed: true, maxAge: (3650 * 24 * 60 * 60) * 1000 }, // 3650 day in ms
    short: { signed: true },
    keys: ['some secret key', 'and also the old rotated away some time ago', 'and one more'],
  },
  claims: {
    address: ['address'],
    email: ['email', 'email_verified'],
    phone: ['phone_number', 'phone_number_verified'],
    profile: ['birthdate', 'family_name', 'gender', 'given_name', 'locale', 'middle_name', 'name',
      'nickname', 'picture', 'preferred_username', 'profile', 'updated_at', 'website', 'zoneinfo'],
  },
  features: {
    devInteractions: { enabled: true }, // defaults to true

    deviceFlow: { enabled: true }, // defaults to false
    introspection: { enabled: true }, // defaults to false
    revocation: { enabled: true }, // defaults to false
  },
  formats: {
     default: 'opaque',
  AccessToken: 'jwt',
  AuthorizationCode: undefined,
  RefreshToken: 'jwt',
  DeviceCode: undefined,
  ClientCredentials: undefined,
  InitialAccessToken: undefined,
  RegistrationAccessToken: undefined
  },
  jwks: {
    keys: [
//      {
//        k: "KooDNBHLvAHYz05gkSPPxN6yMwQSrbFN6XjNTok-htk",
//        kty: "oct",
//        use: 'sig'
//      },
//      {
//        k: "37hukFkjtLPJduBfiKteCr387Rx2sYiiQPJct_mYjBobrg4jFFYDUiscuRP3OYkD",
//        kty: "oct",
//        use: 'sig'
//      },
//      {
//        k: "tO2ePTVCVd19t2OPmICRwCDTwvYNpvf_qsupLj3yxwcP8E6mz_BHabLMTHAy1Jm1LLBHFmR7OI-13Hw1fyS8BA",
//        kty: "oct",
//        use: 'sig'
//      },
      {
        d: "UxmQggYbJkUnCPps6mkqQWgaqnTk4YPxXBE4War5OuwANXg6yVHG3pOYGD5tVkqcIdTTa6eY4tn7zZErdshhAatnXbmMknI2khRmBNUH63vrHfdfBanQIyuiDRFwQUcQ_r5C5Wb6wsPYipFOehnm_j42t5HhG3dQID5DD--nCMDweDzocXavbeZTIGL_kfQ8AwzID5Cv3MuGsRNRrbxKZSxYyVjwqMlDczH7oNadeHQ2jDX7OXzbs37kRpWRv8F5pk_q9w0r2anAL7YxyJrDvVI5WFWE2TUedIZEo-EO0AbA_448V-7XoKbj2VkkowDDxzF6bDIoutW_h1_1LNMJHt7XjzW0jNZfRC5ikBxui5QoesOeJdXNzAT5GFqqYn1sKxfFYjzKlMbMTG859_D2ndo_vrGCPzxb8CI2PxsB3uaGYcUB9roV4ayiQalqKMHXWNXMsK4AqGyLTVyWVl0y0nBnUHD6k8GubcXkJzzzmTJhKKd7MrOEp-24llT_30wB",
        dp: "Pf28RioiybzDkcarf9j9nPnIO23-G7V9IJgvdNYP516cNMWWQPwuXm4TdlFqttpWzElBNivVARVjTdo3Tpm0knSYs65uL1CfH1Bf2cPMz8sa7gHcHXXckuuz95Y5oueoXbo_-szZdc93frj4fPzrWebw-yMQsGSP1qW3OnQhSWhQf49iMi8DkM5qdJhCOj2ZMf2Q6XXkzdI3NCIlORMypSVEUejjG04UtZh3zi1GGMLBS9yp2x70eNLCNuNNs4y5",
        dq: "QGhHT0k19DE8hgFfuUd-0BPpUAGLYqzb24Yeu2b6Nr92bCsuTUPhh4AoYt0Z1YCZjkJThiqs9g33_aB9eq-yycbdpfgDEGK5-iCZljnujoCbBEoH9MYeP2wsdfVv5T84v3PkY06qZsI0ipL6OzZ9xu8Df71wpxJvLW5btkp3yiUzR2-fTlYHRD4rUtqz_dE0SZNGG1XjSgaxi_X6Eoqj7ZP6qrrK7sUBJ7lEsW0Kw8UcdVvLqb0s9Tt9EzJtCGIV",
        e: "AQAB",
        kty: "RSA",
        n: "s-fyKVMN5-sBM7MPd0Gpw4m1d74ZoIxWU17jIu_sS4uYXhwCuB-HLJq2OQTrEUBKhhjONhSa4QoAVZ-aURTEjNLiT0whHcHV0haqKIzTn7G2nLS-fI6G4AgpnNmM4IkVsrvRwZJnL526Tb_OTbygaDrmedk9isKrOghqvdupVu8qKG86TaiZefW5soVpchh5KTUiVkOl__YETRL3WWujMSxdAPY1DgU-wJZQzUdtdINfzPXHkpr4Sl9083_vZv7eTP7RgOS_UEf1wCtKHOV82wkV6wmlvv5XAVCWgQzEGuqPlYXMEncmfoaGBD7C0-tmABoxdBQdO-yecMJlVGbjR1CFL004ETIKtIGgme7hoG5uefRIK8WPmo-cpn_XvYupX7LycIPWL6gy5yNSbX2ke3SZV73w-WKn8G3NyZzcHyWZ0RM_ZS8_2w4dPUwvIDDpoioEFcl0PmFyNpCCj7zmm0eBnD2xRsJUyrSnL-IBTYT-6F1N3EwrV-J3r-D33n7H",
        p: "7X0Ikr_UuGrd9qpoCrjVyMV9y78yO1f9VmkVGbeNZG9zQ2me6wLZPFvpQniZuIPF-fwpWolkl0xezfdO1LjzU83yFkjJNe39NzJu64IYoC4hvzcG28zZ9OZ_o0CH5VKMieSzO2_dUmTpPdsV3NqrFoax5pc64LKfD-5ABXABo6He_HOc9SOJiYooTMd9ql6oZ-VYtfO7oyUNhK6CB_ADehhau7RaoPKMCMHIdf9Q0xLuXa2SEQq5Oprem833kp1p",
        q: "we3iTxcXL8P6WHfwsbrkBrZpwhL_1oIomuXwijGa9z7j-tgEPUeE360CgWTBw_N5h4-s7D47PUO_HnfEql3rvZc43V7JOEOuAlXnAT21uD7G654xzrhogcfrg1nPDozg9SnYbM5Q74R_FHuZUx1wVrb9a90Yuoar83TyJxLdyAbut9eer2cSoiMLR46bHcVDtUk5Hu691Dk_8WkBuShG2obiIlxS0a7APOfk1tTuiDI_ZlnqqMNpw40kI6emjUSv",
        qi: "pvKckn2eqDvF7vqVZC9dHSQDp2mPkHvURP_tpjHsVIp6qxeThiy4b67jFTIK-pnqS4wfN7oUgyxbcZMNlT_8x-xteteQ18XstHm1MHRhYGaYYMZWmHTR0HLf9oU3MnLaPh898j0C2GZiDpeuVLchdmOFjrK9TqtFuAbPwT-dHLtrVgSxzgTcaQx1gEp-NTi0I26cCo952E-JuWN5KcBGAabHgcPk5l9CUFaBv8MbwoQO9EFm6cX8nT_28Pc_f2o-",
        use: 'sig'
      },
      {
        crv: "P-256",
        d: "IuHBNmX-sTssZmuiR6yD51O5acqf2EO60n1u87YoozA",
        kty: "EC",
        x: "L-NCUryE_UVUfoJa4D7zZKVs7kLg1HetkP1friNLBFk",
        y: "0D5LGhccKpPPp0XbDl76WpikJXB38USyjk4_2FN95VA",
        use: 'sig'
      },
      {
        crv: "P-384",
        d: "stlmclTRQUwmAR8K1uBlhinqqT0svj4M7Rf6LCIFtpMFQ1S5-Upk4FrTGDlMZLxi",
        kty: "EC",
        x: "7M8F-bCr5R0T2ozG3Y8ruXc5v3JXuGutx-DJTgGD0wW232ln0H-_Om6mi3rlv5_Y",
        y: "HfSAQTjw3mHKjiAGlQ0lElsxxEnyUxcla7-IGFW0XoUHKvNqCXRIyVrWLpeIlHUO",
        use: 'sig'
      },
      {
        crv: "P-521",
        d: "Nk381kd99pgUu1ctlu6c4jafMKv2SEwnA3wwCsGzKmwY5iQTeWgnFZtrihNYtboQdpRqcInPwdxmYdqmddlhFU4",
        kty: "EC",
        x: "AYlYvxiM1rEPotwR_uIFk_936JBY8pk8i822Adv0jxDtgwp8T7ubOGyV-NE4mFdBIl-ss0OrkYiTH0ENEj6ONOxA",
        y: "AcQZ9ZqgwaVl-2aSDf_4KLHDVzbhUfKMAtuBOCbirxEPuuC5RF8Iz_tjvMfZ6iGGEmL1YX9LpnH3t_Vn6C_nR8Vt",
        use: 'sig'
      }
    ],
  },
  ttl: {
    AccessToken: 3650 * 24 * 60 * 60, // 3650 day in seconds
    AuthorizationCode: 3650 * 24 * 60 * 60, // 3650 day in seconds
    IdToken: 3650 * 24 * 60 * 60, // 3650 day in seconds
    DeviceCode: 3650 * 24 * 60 * 60, // 3650 day in seconds
    RefreshToken: 2 * 3650 * 24 * 60 * 60, // 2 * 3650 day in seconds
  },
};
