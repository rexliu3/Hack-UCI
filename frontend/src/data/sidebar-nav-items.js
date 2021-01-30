export default function() {
  return [
    {
      title: "Dashboard",
      to: "/dashboard",
      htmlBefore: '<i class="material-icons">edit</i>',
      htmlAfter: ""
    },
    {
      title: "Submit Appeal",
      htmlBefore: '<i class="material-icons">note_add</i>',
      to: "/submit-appeal",
    },
    {
      title: "Learn About Covid-19",
      htmlBefore: '<i class="material-icons">vertical_split</i>',
      to: "/education",
    },
    
    {
      title: "Forms & Components",
      htmlBefore: '<i class="material-icons">view_module</i>',
      to: "/components-overview",
    },
    {
      title: "Tables",
      htmlBefore: '<i class="material-icons">table_chart</i>',
      to: "/tables",
    },
    {
      title: "User Profile",
      htmlBefore: '<i class="material-icons">person</i>',
      to: "/user-profile-lite",
    },
    {
      title: "FAQ & Help",
      htmlBefore: '<i class="material-icons">live_help</i>',
      to: "/faq",
    },
  ];
}
