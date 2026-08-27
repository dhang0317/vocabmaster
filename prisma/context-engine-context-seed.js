const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const THEMES = ['daily','workplace','academic','travel','technology','science','social','health','environment','business','media','culture'];
const REGISTERS = ['neutral','informal','formal','professional','academic'];
const SETTINGS = ['home','school','university','office','meeting','email','presentation','interview','store','restaurant','airport','hotel','hospital','laboratory','online'];
const INTENTS = ['inform','request','explain','compare','describe','decide','persuade','agree','disagree','warn','recommend','solve','report','plan'];
const CEFR = ['A1','A2','B1','B2','C1','C2'];

async function main() {
  let count = 0;
  for (const theme of THEMES) {
    for (const cefr of CEFR) {
      const register = REGISTERS[CEFR.indexOf(cefr) % REGISTERS.length];
      for (const intent of INTENTS) {
        const setting = SETTINGS[(count + INTENTS.indexOf(intent)) % SETTINGS.length];
        const code = `ctx:${theme}:${cefr}:${register}:${setting}:${intent}`;
        await prisma.contextProfile.upsert({
          where: { code },
          update: {},
          create: {
            code,
            theme,
            cefr,
            register,
            setting,
            intent,
            description: `${cefr} ${register} English for ${theme} contexts; intent: ${intent}; setting: ${setting}.`,
          },
        });
        count++;
      }
    }
  }
  console.log(`Context profiles ready: ${count}`);
}

main().catch((error) => { console.error(error); process.exit(1); }).finally(() => prisma.$disconnect());
