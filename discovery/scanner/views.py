from rest_framework import viewsets, status
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import Host
from .serializers import HostSerializer
from .logic import discover_host_facts

class HostViewSet(viewsets.ModelViewSet):
    queryset = Host.objects.all()
    serializer_class = HostSerializer

    @action(detail=True, methods=['post'])
    def run_discovery(self, request, pk=None):
        host = self.get_object()
        print(f"DEBUG: Request Data Received: {request.data}")
        print(f"DEBUG: Content Type: {request.content_type}")
        username = request.data.get('username')
        password = request.data.get('password')

        if not username or not password:
            return Response(
                {"error": "Credentials required"}, 
                status=status.HTTP_400_BAD_REQUEST
            )

        facts = discover_host_facts(host.ip_address, username, password)

        host.hostname = facts.get('hostname', host.hostname)
        host.os_name = facts['os_name']
        host.os_version = facts['os_version']
        host.cpu_model = facts['cpu_model']
        host.memory_total = facts['memory_total']
        host.is_online = facts['is_online']
        host.save()

        serializer = self.get_serializer(host)
        return Response(serializer.data)
