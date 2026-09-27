import { BadgeColors } from "@/components/Badge";





const experience1 =
{
    company: 'experience.company1',
    role: 'experience.role1',
    date: 'experience.date1',
    tasks: [
        {
            label1: 'experience.achievement1',
            label2: 'experience.achievement1b'
        },
        {
            label1: 'experience.achievement2',
            label2: 'experience.achievement2b'
        },
        {
            label1: 'experience.achievement3',
            label2: 'experience.achievement3b'
        },
        {
            label1: 'experience.achievement4',
            label2: 'experience.achievement4b'
        }
    ],
    technologies: [
        {
            label: 'React',
            color: BadgeColors.Blue
        },
        {
            label: 'Node.js',
            color: BadgeColors.Green
        },
        {
            label: 'TypeScript',
            color: BadgeColors.Cyan
        },
        {
            label: 'Microservices',
            color: BadgeColors.Slate
        },
        {
            label: 'Docker',
            color: BadgeColors.Purple
        }
    ]
}

const experience2 = {
    company: 'experience.company2',
    role: 'experience.role1',
    date: 'experience.date2',
    tasks: [
        {
            label1: 'experience.achievement5',
            label2: 'experience.achievement5b'
        },
        {
            label1: 'experience.achievement6',
            label2: 'experience.achievement6b'
        },
        {
            label1: 'experience.achievement7',
            label2: 'experience.achievement7b'
        }
    ],
    technologies: [
        {
            label: 'Angular',
            color: BadgeColors.Red
        },
        {
            label: 'Node.js',
            color: BadgeColors.Green
        },
        {
            label: 'SQL Server',
            color: BadgeColors.Blue
        },
        {
            label: 'Apache Tomcat',
            color: BadgeColors.Orange
        }
    ]
}

export const EXPERIENCES = [
    experience1,
    experience2
]