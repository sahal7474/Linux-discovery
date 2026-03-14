from rest_framework import serializers
from .models import Host

class HostSerializer(serializers.ModelSerializer):
    """
    Trnaslates the host database model into JSON format.
    """
    class Meta:
        model = Host
        fields = [
            'id', 
            'hostname', 
            'ip_address', 
            'os_name', 
            'os_version', 
            'cpu_model', 
            'memory_total', 
            'last_scanned', 
            'is_online'
        ]

        read_only_fields = [
            'os_name', 
            'os_version', 
            'cpu_model', 
            'memory_total', 
            'last_scanned', 
            'is_online'
        ]
