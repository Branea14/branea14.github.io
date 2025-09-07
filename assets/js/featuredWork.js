export const projects = [
    {
      image: "images/PT_logo.jpg",
      projectName: "Power Tots Inc. - TotKit",
      projectDesc: "Internal equipment management for instructors—real-time status, check-in/out with audit logs, and Slack-based image approvals",
      projectTech: "React (Vite) • Express • Prisma/PostgreSQL • Supabase • Docker • Cloud Run • GCP IAP",
      private: true,
      footerLink: [
        { name: "Visit Website", url: "https://totkit.powertotsinc.com/" }
        //  you can add extra buttons here.
      ]
    },
    {
      image: "images/logo.png",
      projectName: "Wonderhood",
      projectDesc: "Enrollment for homeschool families, child profiles, instructor rosters with parent/emergency contacts, and admin email blasts & event management",
      projectTech: "FastAPI • JWT • PostgreSQL • React (Next.js)",
      private: false,
      footerLink: [
        { name: "Visit Website",  url: "http://nextu.se/" }
      ]
    },
    {
      image: "images/fair_job.png",
      projectName: "LVC Solutions - Fair Job",
      projectDesc: "Skills-first job portal with AI matching and face verification (AWS Rekognition) to reduce fake accounts/postings; recruiter tools",
      projectTech: "Next.js (TypeScript) • Firebase Auth • Firestore • AWS Rekognition",
      private: false,
      footerLink: [
        { name: "Visit Website", url: "https://www.lvcfairjob.com/" }
      ]
    }
]
