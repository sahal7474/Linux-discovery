import paramiko
import socket

def discover_host_facts(ip, username, password):
    """
    Connects to a remote host via SSH and discovers system facts.
    Returns a dictionary of findings or raises an exception.
    """
    facts = {
        "os_name": "Unknown",
        "os_version": "Unknown",
        "cpu_model": "Unknown",
        "memory_total": "Unknown",
        "is_online": False
    }

    client = paramiko.SSHClient()
    client.set_missing_host_key_policy(paramiko.AutoAddPolicy())

    try:
        client.connect(ip, username=username, password=password, timeout=10)
        facts["is_online"] = True

        stdin,stdout,stderr = client.exec_command("cat /etc/os-release")
        os_release = stdout.read().decode()
        for line in os_release.splitlines():
            if line.startswith("NAME="):
                facts["os_name"] = line.split("=")[1].strip('"')
            if line.startswith("VERSION_ID="):
                facts["os_version"] = line.split("=")[1].strip('"')

        stdin,stdout,stderr = client.exec_command("lscpu | grep 'Model name'")
        cpu_output = stdout.read().decode()
        if not cpu_output:
            stdin,stdout,stderr = client.exec_command("grep -m 1 'model name' /proc/cpuinfo")
            cpu_output = stdout.read().decode()
        if cpu_output:
            facts["cpu_model"] = cpu_output.split(":")[1].strip()

        stdin,stdout,stderr = client.exec_command("free -h | grep Mem")
        mem_output = stdout.read().decode()
        if mem_output:
            facts["memory_total"] = mem_output.split()[1]

    except (paramiko.AuthenticationException, paramiko.SSHException, socket.timeout) as e:
        print(f"Discovery failed for {ip}: {str(e)}")
        
    finally:
        client.close()

    return facts
