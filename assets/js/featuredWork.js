export const projects = [
    {
      image: "images/PT_logo.jpg",
      projectName: "Power Tots Inc. - TotKit",
      projectDesc: "Internal equipment management system with real-time equipment status, Slack-based image approvals, and check-in/out with audit logs",
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
      projectDesc: "Wonderhood lets homeschool families enroll in extracurriculars and manage profiles. Instructors see class rosters with parent/emergency contacts, and admins manage events and send email blasts.",
      projectTech: "FastAPI • JWT • PostgreSQL • React (Next.js)",
      private: false,
      footerLink: [
        { name: "Visit Website",  url: "http://nextu.se/" }
      ]
    },
    {
      image: "images/fair_job.png",
      projectName: "LVC Solutions - Fair Job",
      projectDesc: "AI-assisted job portal with face verification to deter fake accounts/postings, skills-based matching, and recruiter tools.",
      projectTech: "Next.js (TypeScript) • Firebase Auth • Firestore • AWS Rekognition",
      private: false,
      footerLink: [
        { name: "Visit Website", url: "https://www.lvcfairjob.com/" }
      ]
    }
]
