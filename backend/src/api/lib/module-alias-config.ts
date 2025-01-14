import moduleAlias from "module-alias"
import path from "path"

moduleAlias.addAliases({
  "@": path.resolve(__dirname, "../"),
  "#db": path.resolve(__dirname, "../../prisma/index.ts"),
})
export default moduleAlias
