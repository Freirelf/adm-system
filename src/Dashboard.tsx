
import { Button } from "./components/ui/button"
import {   Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger, } from "./components/ui/menubar"

function Dashboard() {
  return (
    <div className="">
      <Menubar className=" flex justify-between bg-primary text-white">
        <MenubarMenu>
          <MenubarTrigger>File</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>
              Perfil <MenubarShortcut>⌘T</MenubarShortcut>
            </MenubarItem>
            <MenubarItem>configurações</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Sair</MenubarItem>
            <MenubarSeparator />
          </MenubarContent>
          <MenubarTrigger>notification|Avatar</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
      <h1>dash</h1>
      <Button >
        clique
      </Button>

    </div>
  )
}

export default Dashboard