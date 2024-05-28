import SelectedProject from "./components/SelectedProject";
import NewProject from "./components/NewProject";
import NotSelected from "./components/NotSelected";
import Sidebar from "./components/Sidebar";
import { useState } from "react";

function App() {
  const [project, setProject] = useState({
    selectedProjectId: undefined,
    projects: [],
    tasks: []
  });
  function handleAddTask(text){
    setProject(prevState => {
      const tid = Math.random();
      const newTask = {
        text: text,
        pid: prevState.selectedProjectId,
        id: tid,
      };

      return {
        ...prevState,
        tasks: [...prevState.tasks, newTask]
      };
    });
  }
  function handleDeleteTask(id){
    setProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        tasks: prevState.tasks.filter(
          (task) => task.id !== id),
      };
    });
  }
  function handleSelectProject(id){
    setProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: id,
      };
    });
  }
  function handleAddProject() {
    setProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: null,
      };
    });
  }
  function handleCancelProject(){
    setProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
      };
    });
  }
  function handleDeleteProject(){
    setProject(prevState => {
      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: prevState.projects.filter(
          (project) => project.id !== prevState.selectedProjectId),
      };
    });
  }
  function handleProject(projectData){
    setProject(prevState => {
      const pid = Math.random();
      const newProject = {
        ...projectData,
        id: pid,
      };

      return {
        ...prevState,
        selectedProjectId: undefined,
        projects: [...prevState.projects, newProject],
      };
    });
  }
  const selectedProject = project.projects.find(proj => proj.id === project.selectedProjectId);
  let content= <SelectedProject 
          project={selectedProject} 
          onDelete={handleDeleteProject} 
          onAddTask = {handleAddTask}
          onDeleteTask = {handleDeleteTask}
          tasks = {project.tasks}/>;

  if (project.selectedProjectId === null) {
    content = <NewProject onAdd= {handleProject} onCancel= {handleCancelProject}/>
  } else if (project.selectedProjectId === undefined) {
    content = <NotSelected onStartAddProject={handleAddProject} />;
  }


  return (
    <main className="h-screen my-8 flex gap-8">
      <Sidebar 
        onStartAddProject= {handleAddProject} 
        projectgit add s= {project.projects}
        onSelectProject={handleSelectProject}
        selectedProjectId={project.selectedProjectId}
      />
      {content}
    </main>
  );
}

export default App;