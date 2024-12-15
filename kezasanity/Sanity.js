import SanityClient from "@sanity/client";

export const client = SanityClient({
    projectId: 'g9khyeyf',
    dataset: 'production',
    useCdn: true,
    token: "skomct94iU7d8qT29LYdwkd26rXYpiNQrfTwK0ShkSCBAOBPA2OrwmyeSU2lk1w2DR9eBbDtqt3pbnYkquDYkvhqOwbN5b8WOBLdzJqSRTRoeebqlsbTDzhaQPWJffA4JaIOeGG7qcOR2JhdKqONkZEmu3JTf9sEzPgUlzgfIYMNPghEsn3E"
})